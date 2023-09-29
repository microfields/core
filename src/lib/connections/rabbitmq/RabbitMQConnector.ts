
import amqp from "amqplib";
import Connection from "../Connection";
import ServiceBase from "../../ServiceBase";
import ServiceGateway from "../../ServiceGateway";
import {RabbitMQService} from "./RabbitMQService";
import ConnectionPriority from "../ConnectionPriority";

@ConnectionPriority(2)
class RabbitMQConnector implements Connection<ServiceBase & RabbitMQService> {
    client?: amqp.Connection;

    host: string;
    port: number;
    username: string;
    password: string;


    constructor(host: string = "localhost", port: number = 5672, username: string = "guest", password: string = "guest") {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
    }

    async init() {
        this.client = await amqp.connect("amqp://" + this.username + ":" + this.password + "@" + this.host + ":" + this.port);
        this.client.on('error', err => console.log('[SERVICES/RabbitMQ-CONNECTOR] RabbitMQ Client Error!', err));
    }

    async connect(service: ServiceBase & RabbitMQService) {
        if (!this.client) return;
        service.mq = this.client;
        service.channel = await this.client.createChannel();

        await ServiceGateway.init(service);
    }

    async disconnect(service: RabbitMQService) {
        await service.channel.close();
    }
}

export default RabbitMQConnector;