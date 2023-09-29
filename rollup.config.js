import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

import { swc } from "rollup-plugin-swc3";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  treeshake: true,
  plugins: [
    json(),
    commonjs(),
    resolve({ preferBuiltins: true }),
    swc({
      include: /\.[mc]?[jt]s?$/, // default
      exclude: /node_modules/, // default
      tsconfig: "tsconfig.json", // default
      // tsconfig: false, // You can also prevent `rollup-plugin-swc` from reading tsconfig.json, see below
      // And add your swc configuration here!
      // "filename" will be ignored since it is handled by rollup
      jsc: {
        parser: {
          decorators: true,
          syntax: "typescript",
        },
        target: "esnext",
      },
      module: {
        type: "es6",
      },
      sourceMaps: true,
    }),

    typescript({
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        declarationDir: "./dist/types",
      },
    }),
  ],
};
