
import ServiceBase from "./ServiceBase";
import ServiceLoader from "./ServiceLoader";

class ServiceManager {
    services: ServiceBase[] = [];
    loader: ServiceLoader;

    constructor() {
        this.loader = new ServiceLoader(this);
    }

    register(service: ServiceBase) {
        this.services.push(service);
    }

    async load() {
        await this.loader.load();
    }
}

export default ServiceManager;