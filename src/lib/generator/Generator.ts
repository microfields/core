import { SourceFile } from "ts-morph";

abstract class Generator<T> {
  source: SourceFile;

  constructor(source: SourceFile) {
    this.source = source;
  }
  async generate(item: T) {}
}

export default Generator;
