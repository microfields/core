
import ServiceBase from "./ServiceBase";
import ServiceLoader from "./ServiceLoader";
import BaseGenerator from "./generator/BaseGenerator";

class ServiceManager {
    static services: ServiceBase[] = [];
    static loader: ServiceLoader;
    private static generator: BaseGenerator = new BaseGenerator();

    static register(service: ServiceBase) {
        this.services.push(service);
    }

    static async load() {
        this.loader = new ServiceLoader();
        await this.loader.load(); 
        await this.generator.generateServices(this.services);
    }
}

export default ServiceManager;