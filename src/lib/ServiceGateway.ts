import ServiceBase from "./ServiceBase";
import {RabbitMQService} from "./connections/rabbitmq/RabbitMQService";

class ServiceGateway {
    static async init(service: ServiceBase & RabbitMQService) {
        await service.channel.assertExchange(service.metadata.name.toLowerCase(), "direct", {durable: true});
        service.metadata.mq.routingKey = service.metadata.name.toLowerCase();
    }
}

export default ServiceGateway;