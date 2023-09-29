import { PrismaClient } from "@prisma/client";

interface PrismaService {
  db: PrismaClient;
}

function hasPrismaService(obj: any): obj is PrismaService {
  return "db" in obj;
}

export { PrismaService, hasPrismaService };
