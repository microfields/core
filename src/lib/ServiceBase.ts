import Fastify, { type FastifyInstance } from "fastify"

import type Redis from "ioredis";
import IServiceBaseProps from "./IServiceBaseProps";
import { BakedServiceMetadata } from "./ServiceMetadata";
import Bunyan from "bunyan";

abstract class ServiceBase implements IServiceBaseProps {
    server!: FastifyInstance;
    logger!: Bunyan;

    metadata: BakedServiceMetadata = {
        name: "default",
        port: 3880,
        path: __dirname,
        mq: {
            routingKey: "default"
        }
    }

    async init() { }

    async run() { }

    async shutdown() { }
}

export default ServiceBase;