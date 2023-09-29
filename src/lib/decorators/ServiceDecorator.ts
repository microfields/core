import "reflect-metadata";
import { ServiceMetadata } from "../ServiceMetadata";


const Service = (data: ServiceMetadata) => {
    return (target: Function) => {
        Reflect.defineMetadata("data", data, target)
    }
}
export default Service;