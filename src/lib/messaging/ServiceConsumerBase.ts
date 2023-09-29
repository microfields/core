import { Channel } from "amqplib";

abstract class ServiceConsumerBase implements IServiceConsumer {
    channel!: Channel;
    queue!: string;

    async consume(msg: any) {
        
    }

    send(msg: any) {
        this.channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(msg)));
    }
}

interface IServiceConsumer {
    consume(msg: any): Promise<void>;
}

export default ServiceConsumerBase;