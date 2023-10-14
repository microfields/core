import { FastifyReply, FastifyRequest } from "fastify";

interface ServiceMiddleware {
  middleware(req: FastifyRequest<any>, res: FastifyReply<any>, next: () => void): void;
}

export default ServiceMiddleware;
