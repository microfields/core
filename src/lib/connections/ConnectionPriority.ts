import "reflect-metadata";

const ConnectionPriority = (priority: number) => {
  return (target: Function) => {
    Reflect.defineMetadata("priority", priority, target);
  };
};

export default ConnectionPriority;
