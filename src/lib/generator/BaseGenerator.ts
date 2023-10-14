import path from "path";
import {
  ModuleKind,
  ModuleResolutionKind,
  Project,
  ScriptTarget,
  SourceFile,
} from "ts-morph";
import fs from "fs-extra";

import ServiceGenerator from "./ServiceGenerator";
import ServiceBase from "../ServiceBase";
import { getMicrofieldsPackagePath } from "../utils/misc";

class BaseGenerator {
  project: Project = new Project({
    compilerOptions: {
      noImplicitAny: true,
      target: ScriptTarget.ESNext,
      module: ModuleKind.CommonJS,
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      noUnusedParameters: false,
      moduleResolution: ModuleResolutionKind.NodeNext,
      resolveJsonModule: true,
      strict: true,
      declaration: true,
      esModuleInterop: true,
      skipLibCheck: true,
      inlineSourceMap: true,
      forceConsistentCasingInFileNames: true,
    },
  });

  async generateServices(services: ServiceBase[]) {
    const p = path.resolve(
      await getMicrofieldsPackagePath(),
      "generated",
      "index.ts"
    );

    if (await fs.exists(p)) {
      await fs.remove(p);
    }

    const file: SourceFile = this.project.createSourceFile(p);
    const serviceGen = new ServiceGenerator(file);
    for (const service of services) {
      await serviceGen.generate(service);
    }
    await file.emit();
  }
}

export default BaseGenerator;
