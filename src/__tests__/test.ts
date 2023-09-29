import { Connection, Channel } from "amqplib";
import ServiceBase from "../lib/ServiceBase";
import {RabbitMQService} from "../lib/connections/rabbitmq/RabbitMQService";
import {RedisService} from "../lib/connections/redis/RedisService";
import { Redis } from "ioredis";

class Servi extends ServiceBase implements RabbitMQService, RedisService {
    redis!: Redis;
    mq!: Connection;
    channel!: Channel;

    async init() {
        
    }

}