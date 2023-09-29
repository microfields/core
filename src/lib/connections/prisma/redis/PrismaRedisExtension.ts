import { Redis } from "ioredis";

/**
 *                                    MUTATIONS
 *
 *     create, createMany, upsert, delete, deleteMany, update, updateMany
 */

/**
 *                                    QUERIES
 *
 *      count, find, findMany, findUnique, findUniqueOrThrow, findFirst, findFirstOrThrow, aggregrate
 */

const initExtension = (redis: Redis) => {
  return {
    name: "Microfields-Redis",
    query: {
      $allModels: {
        async create({model, args, query }: any) {
          const result = await query(args);
          

          return result;
        },

        async findMany({ model, args, query }: any) {
          return query(args);
        },
      },
    },
  };
};

export default initExtension;
