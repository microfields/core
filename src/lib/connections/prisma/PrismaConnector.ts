import ServiceBase from "../../ServiceBase";
import Connection from "../Connection";
import { PrismaService } from "./PrismaService";

import ext from "./redis/PrismaRedisExtension";
import { isInstance } from "../redis/RedisService";
import ConnectionPriority from "../ConnectionPriority";
import PrismaServiceProps from "./PrismaServiceProps";

@ConnectionPriority(3)
class PrismaConnector implements Connection<ServiceBase & PrismaService> {
  props: PrismaServiceProps;

  useRedis: boolean;

  constructor(props: PrismaServiceProps, useRedis: boolean = false) {
    this.useRedis = useRedis;
    this.props = props;
  }

  async init() {
    
  }

  async connect(service: ServiceBase & PrismaService) {
    if (isInstance(service)) {
      service.db = this.props.client.$extends(ext(service.redis));
      return;
    }
    service.db = this.props.client;
  }

  async disconnect(service: ServiceBase & PrismaService) {
    await service.db.$disconnect(); // simulates $disconnect() method
  }
}

export default PrismaConnector;
