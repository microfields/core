import Fastify, {
  FastifyBaseLogger,
  FastifyReply,
  FastifyRequest,
  FastifySchema,
  FastifyTypeProviderDefault,
  RawServerDefault,
  RouteGenericInterface,
  type FastifyInstance,
} from "fastify";

import IServiceBaseProps from "./IServiceBaseProps";
import { BakedServiceMetadata } from "./ServiceMetadata";
import Bunyan from "bunyan";
import ServiceMiddleware from "./middleware/ServiceMiddleware";
import { ResolveFastifyRequestType } from "fastify/types/type-provider";
import { IncomingMessage, ServerResponse } from "http";
import path from "path";

class ServiceBase implements IServiceBaseProps, ServiceMiddleware {
  server!: FastifyInstance;
  logger!: Bunyan;

  metadata: BakedServiceMetadata = {
    name: "default",
    port: 3880,
    path: path.resolve(),
    mq: {
      routingKey: "default",
    },
  };

  async init() {}

  async run() {}

  async shutdown() {}

  middleware(
    req: FastifyRequest<any>,
    res: FastifyReply<any>,
    next: () => void
  ) {}
}

export default ServiceBase;
