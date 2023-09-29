import { Redis } from "ioredis";

interface RedisService {
    redis: Redis;
}

function isInstance(obj: any): obj is RedisService {
    return 'redis' in obj;
}


export {RedisService, isInstance};