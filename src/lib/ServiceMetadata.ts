type ServiceMetadata = {
    port: number;
    name: string;
}

type BakedServiceMetadata = ServiceMetadata & {
    path: string;
    mq: {
        routingKey: string;
    }
}

export {
    ServiceMetadata,
    BakedServiceMetadata,
};