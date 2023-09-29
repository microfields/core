interface Connection<T> {
    init(): Promise<void>;
    connect(service: T): Promise<void>;
    disconnect(service: T): Promise<void>;
}

export default Connection;