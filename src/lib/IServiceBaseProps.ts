import {type FastifyInstance} from "fastify"
type IServiceBaseProps = {
    server?: FastifyInstance;
    run(): Promise<void>;
}

export default IServiceBaseProps;