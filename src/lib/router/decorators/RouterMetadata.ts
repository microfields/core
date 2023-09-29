import type { AnyZodObject } from "zod";

type RouterMetadata = {
    id: string;
    path: string;
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
    loader?: boolean;
    action?: boolean;
}

type BakedRouterMetadata = RouterMetadata & {
    mq: {
        queryKey: string
    },
    root?: {
        name?: string;
    };
}

export {RouterMetadata, BakedRouterMetadata};