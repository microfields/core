
import bunyan from "bunyan";
import MicrofieldProps from "./MicrofieldProps";
import ServiceManager from "./lib/ServiceManager";
import Connection from "./lib/connections/Connection";
import ConnectionManager from "./lib/connections/ConnectionManager";
import LoggerConnector from "./lib/connections/logger/LoggerConnector";

class Microfields {
    manager: ServiceManager;
    static props: MicrofieldProps = {};

    private defaultConnections: Connection<any>[] = [
        new LoggerConnector(),
    ]

    constructor(props?: MicrofieldProps) {
        if (props) Microfields.props = props;
        this.manager = new ServiceManager();
        
        this.addConnection(new LoggerConnector())
    }

    private async init() {
        for (const connection of ConnectionManager.all()) {
            await connection.init();
        }
    }

    async start() {
        await this.init();
        await this.manager.load();
    }

    addConnection(connection: Connection<any>): Microfields {
        ConnectionManager.add(connection);
        return this;
    }
}

export default Microfields;