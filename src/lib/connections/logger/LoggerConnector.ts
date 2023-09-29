import path from "path";
import ServiceBase from "../../ServiceBase";
import { logger } from "../../utils/logger";
import Connection from "../Connection";
import Bunyan from "bunyan";
import ConnectionPriority from "../ConnectionPriority";

@ConnectionPriority(0)
class LoggerConnector implements Connection<ServiceBase> {
    logger?: Bunyan;

    async init() {
        this.logger = logger;
    }

    async connect(service: ServiceBase) {
        if (!this.logger) return;
        service.logger = this.logger.child({
            service: service.metadata.name,
            package: path.parse(service.metadata.path).base,
            level: "debug"
        });
    }

    async disconnect(service: ServiceBase) {}
}

export default LoggerConnector;