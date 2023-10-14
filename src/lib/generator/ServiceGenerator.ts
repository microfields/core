import { ClassDeclaration, SourceFile } from "ts-morph";
import ServiceBase from "../ServiceBase";
import Generator from "./Generator";

class ServiceGenerator implements Generator<ServiceBase> {
  source!: SourceFile;
  class: ClassDeclaration;
  constructor(source: SourceFile) {
    this.source = source;
    this.class = source.addClass({
      name: "Services",
      isExported: true,
    })
  }
  async generate(service: ServiceBase) {
    this.class.addProperty({
      name: service.metadata.name,
      isReadonly: true,
      isStatic: true,
      type: "string",
      initializer: `"${service.metadata.name}"`
    })
  }
}

export default ServiceGenerator;
