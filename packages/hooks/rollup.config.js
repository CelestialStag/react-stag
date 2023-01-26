import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // scss({}),
      // postcss(),
      styles({
        mode: ["extract", "$stag.css"],
        namedExports: true,
        modules: {
          generateScopedName: "$stag.[local].[hash:4]",
        },
        autoModules: (id) => !!id.match(/\.(sass|scss|css)/),
      }),
      peerDepsExternal(),
      resolve(),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [".rollup.cache/**/*", "./dist/index.d.ts", "./test/**/*"],
        outputToFilesystem: false,
      }),
      terser({
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
        },
      }),
    ],
    external: ["react", "react/jsx-runtime"],
  },
  {
    input: "./dist/esm/index.d.ts",
    output: [{ file: "./dist/index.d.ts", format: "esm" }],
    plugins: [resolve(), dts.default()],
    external: [/\.css$/],
  },
];
