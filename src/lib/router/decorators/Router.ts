import "reflect-metadata";
import {RouterMetadata} from "./RouterMetadata";

const Router = (data: RouterMetadata) => {
    return (target: Function) => {
        Reflect.defineMetadata("data", data, target)
    }
}

export default Router;