import { Channel } from "amqplib";
import RouteData from "./RouteData";
import { BakedRouterMetadata } from "./decorators/RouterMetadata";
import type Bunyan from "bunyan";
import ServiceBase from "../ServiceBase";
import IRoute from "./IRoute";

class Route<S extends ServiceBase> implements IRoute {
    service!: S;
    channel!: Channel;
    logger!: Bunyan;

    metadata: BakedRouterMetadata = {
        id: "default",
        mq: {
            queryKey: "default"
        },
        path: "default",
    }

    async action(data: RouteData) {
        return {};
    }

    async loader(data: RouteData) {
        return {};
    }

    send(service: string, action: string, msg: RouteData) {
        this.channel.publish(service, action, Buffer.from(JSON.stringify(msg)), {
            replyTo: this.metadata.root!.name
        })
    }
}

export default Route;