import { Channel, Connection } from "amqplib";

interface RabbitMQService {
    mq: Connection;
    channel: Channel;
}

function hasRabbitMQService(obj: any): obj is RabbitMQService {
    return 'mq' in obj;
}


export {RabbitMQService, hasRabbitMQService};