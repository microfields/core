import Redis from "ioredis";
import Connection from "../Connection";
import { RedisService } from "./RedisService";
import { logger } from "../../utils/logger";
import ConnectionPriority from "../ConnectionPriority";

@ConnectionPriority(1)
class RedisConnector implements Connection<RedisService> {
  client?: Redis;

  host: string;
  port: number;

  constructor(host: string = "localhost", port: number = 6379) {
    this.host = host;
    this.port = port;
  }

  async init() {
    this.client = new Redis({ host: this.host, port: this.port });

    this.client.on("error", (err) =>
      logger.error({ package: "microfields", err }, "REDIS CLIENT ERROR!")
    );
    this.client.on("connect", () =>
      logger.info({ package: "microfields" }, "Redis Client Connected!")
    );
  }

  async connect(service: RedisService) {
    if (!this.client) return;
    service.redis = this.client;
  }

  async disconnect(service: RedisService) {
    if (!this.client) return;
    service.redis.disconnect();
  }
}

export default RedisConnector;
