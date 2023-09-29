import { PrismaClient } from "@prisma/client";

class PrismaClientLoader {
  DELIMITERS: string[] = [
    "_",
    "$"
  ]

  client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  loadModels(): string[] {
    let keys = Object.keys(this.client);
    this.DELIMITERS.forEach(del => {
      keys = keys.filter((val) => !val.startsWith(del))
    });
    return keys;
  }
}

export default PrismaClientLoader;
