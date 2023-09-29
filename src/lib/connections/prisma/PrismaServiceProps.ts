import { PrismaClient } from "@prisma/client";

type PrismaServiceProps = {
  client: PrismaClient;
};

export default PrismaServiceProps;