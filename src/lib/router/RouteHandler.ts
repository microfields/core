import { FastifyRequest } from "fastify";
import Route from "./Route";
import RouteData from "./RouteData";

class RouteHandler {
    async handleLoader(route: Route<any>, req: FastifyRequest) {
        let data: RouteData = req.params;
        return await route.loader(data);
    }

    async handleAction(route: Route<any>, req: FastifyRequest) {
        let data: RouteData = {...(req.params as any), ...(req.body as any)};
        return await route.action(data);
    }
}

export default RouteHandler;