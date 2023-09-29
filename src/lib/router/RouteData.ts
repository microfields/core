type RouteData = any & {
    from: RouteDataFrom
};

type RouteDataFrom = {
    method: "mq" | "http",
}

export default RouteData;