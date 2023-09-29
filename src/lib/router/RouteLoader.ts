import fs from "fs";
import path from "path";

import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import Route from "./Route";
import { RouterMetadata } from "./decorators/RouterMetadata";
import ServiceBase from "../ServiceBase";
import { hasRabbitMQService } from "../connections/rabbitmq/RabbitMQService";
import RouteHandler from "./RouteHandler";
import { logger } from "../utils/logger";
import { hasPrismaService } from "../connections/prisma/PrismaService";

class RouteLoader {
  static DEFAULT_ROUTE_DIR: string = "routes/";

  static async load(service: ServiceBase) {
    const routesPath = path.resolve(
      service.metadata.path,
      this.DEFAULT_ROUTE_DIR
    );

    if (!fs.existsSync(routesPath)) return;
    const routes = fs.readdirSync(routesPath);

    service.server.setValidatorCompiler(validatorCompiler);
    service.server.setSerializerCompiler(serializerCompiler);

    const defaultRoute = new Route();

    for (const route of routes) {
      const routePath = path.resolve(routesPath, route);

      const clazz = (await import(routePath)).default;

      var routeInst: Route<any> = Object.create(clazz.prototype);
      const metadata: RouterMetadata = Reflect.getMetadata("data", clazz);

      routeInst.service = service;
      routeInst.logger = service.logger;

      routeInst.metadata = {
        ...metadata,
        mq: {
          queryKey: "default",
        },
        root: {
          name: service.metadata.name,
        },
      };

      if (hasRabbitMQService(service)) {
        routeInst.channel = service.channel;
        const queryKey = "query." + metadata.id.toLowerCase();
        await service.channel.assertQueue(queryKey, { durable: true });
        await service.channel.bindQueue(
          queryKey,
          service.metadata.mq.routingKey,
          metadata.id.toLowerCase()
        );

        await service.channel.consume(queryKey, async (msg) => {
          if (!msg) return;
          logger.info(
            {
              package: "microfields",
              service: service.metadata.name,
              method: "AMQP",
              pathMQ: msg.properties.replyTo,
            },
            "Incoming mesage..."
          );

          await routeInst.action(JSON.parse(msg.content.toString()));
          service.channel.ack(msg);

          logger.info(
            {
              package: "microfields",
              service: service.metadata.name,
              method: "AMQP",
              pathMQ: msg.properties.replyTo,
            },
            "Message consumed."
          );
        });

        routeInst.metadata = {
          ...metadata,
          mq: {
            queryKey,
          },
          root: {
            name: service.metadata.name,
          },
        };
      }

      // if (hasPrismaService(service)) {
      //   routeInst.db = service.db;
      // }

      const handler = new RouteHandler();

      if (defaultRoute.loader !== routeInst.loader) {
        service.server.withTypeProvider<ZodTypeProvider>().route({
          method: "GET",
          url: "/" + metadata.path,
          errorHandler(error, request, reply) {
            service.logger.error({ package: "microfields", err: error }, "Request Error.");
          },
          onResponse: async (req, rep) => {
            service.logger.info(
              {
                package: "microfields",
                method: req.method,
                path: req.url,
                statusCode: rep.statusCode,
                responseTime: rep
                  .getResponseTime()
                  .toLocaleString("en-us", { maximumFractionDigits: 1 }),
              },
              "Request completed."
            );
          },
          handler: async (req) => await handler.handleLoader(routeInst, req),
          ...(metadata.params && {
            schema: {
              params: metadata.params,
            },
          }),
        });
      }

      if (defaultRoute.action !== routeInst.action) {
        service.server.withTypeProvider<ZodTypeProvider>().route({
          method: "POST",
          url: "/" + metadata.path,
          onRequestAbort: () => {
            console.log("qweqwe");
          },
          onResponse: async (req, rep) => {
            service.logger.info(
              {
                package: "microfields",
                method: req.method,
                path: req.url,
                statusCode: rep.statusCode,
                responseTime: rep
                  .getResponseTime()
                  .toLocaleString("en-us", { maximumFractionDigits: 1 }),
              },
              "Request completed."
            );
          },
          handler: async (req) => await handler.handleAction(routeInst, req),
          ...(metadata.params && {
            schema: {
              params: metadata.params,
            },
          }),
        });
      }
    }
  }

  static async unload(service: ServiceBase) {}
}

export default RouteLoader;
