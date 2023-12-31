import fs from "fs";
import path from "path";

import config from "../config.json";
import ServiceBase from "./ServiceBase";
import { ServiceMetadata } from "./ServiceMetadata";
import Fastify from "fastify";
import RouteLoader from "./router/RouteLoader";
import ConnectionManager from "./connections/ConnectionManager";
import ServiceManager from "./ServiceManager";
import Microfields from "../Microfields";
import { logger } from "./utils/logger";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import BaseGenerator from "./generator/BaseGenerator";

class ServiceLoader {
  async load() {
    const servicesPath = path.resolve(
      path.resolve(),
      Microfields.props.baseUrl ?? "",
      config.services.path
    );

    const dirs = fs.readdirSync(servicesPath);

    for (const dir of dirs) {
      const servicePath = path.resolve(servicesPath, dir);

      const clazz = (await import(servicePath)).default;
      var service: ServiceBase = Object.create(clazz.prototype);

      const metadata: ServiceMetadata = Reflect.getMetadata("data", clazz);

      service.metadata = {
        ...metadata,
        mq: {
          routingKey: "default",
        },
        path: servicePath,
      };

      service.server = Fastify({
        logger: false,
      });

      service.server.setValidatorCompiler(validatorCompiler);
      service.server.setSerializerCompiler(serializerCompiler);

      service.server.setNotFoundHandler((req, rep) => {
        service.logger.error(
          { package: "microfields" },
          "Route not found. (" + req.url + ")"
        );
        rep.code(404);
        rep.send({
          message: "404 Not found",
          error: "Not Found",
          statusCode: 404,
        });
      });

      service.server.setErrorHandler((err, req, rep) => {
        service.logger.error(
          { package: "microfields", err },
          "Internal Server Error. (" + req.url + ")"
        );
        rep.code(500);
        rep.send({
          message: "Internal Server Error",
          error: "Server Error",
          statusCode: 500,
        });
      });

      for (const connection of ConnectionManager.all()) {
        await connection.connect(service);
      }

      await RouteLoader.load(service); // load routes & register queries to exchange
      await service.init(); // service#init

      try {
        await service.server.listen({ port: service.metadata.port });
      } catch (err) {
        service.logger.error("Server shutting down...");
        service.shutdown();
        process.exit(1);
      }
      logger.info(
        {
          package: "microfields",
          service: service.metadata.name,
        },
        "Service running on :" + service.metadata.port
      );
      ServiceManager.register(service);
      service.run();
    }
  }

  async unload() {
    for (const service of ServiceManager.services) {
      for (const connection of ConnectionManager.all()) {
        await connection.disconnect(service);
      }
      await service.shutdown();
    }
  }
}

export default ServiceLoader;
