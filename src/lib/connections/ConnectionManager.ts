import "reflect-metadata";

import Connection from "./Connection";

class ConnectionManager {
  private static connections: Connection<any>[] = [];

  static add(connection: Connection<any>) {
    this.connections.push(connection);
  }

  static all(): Connection<any>[] {
    return this.connections.sort((c1, c2) => {
      const p1: number = Reflect.getMetadata(
        "priority",
        c1.constructor
      );
      const p2: number = Reflect.getMetadata(
        "priority",
        c2.constructor
      );

      if (p1 > p2) {
        return 1;
      }

      if (p1 < p2) {
        return -1;
      }

      return 0;
    });
  }
}

export default ConnectionManager;
