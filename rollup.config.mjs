import babel from "@rollup/plugin-babel";
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import tailwindcss from 'tailwindcss';
import typescript from '@rollup/plugin-typescript';
import { dts } from "rollup-plugin-dts";

import tailwindConfig from './tailwind.config.js';

export default [{
  input: 'src/index.ts',
  output: [{
    file: 'dist/bundle.es.js',
    format: 'esm',
  },
  {
    file: 'dist/bundle.js',
    format: 'cjs',
  }],
  plugins: [
    external(),
    resolve(),
    // babel({babelHelpers:'bundled', presets:["@babel/preset-typescript", "@babel/preset-react"]}),
    postcss({
      plugins: [
          tailwindcss(tailwindConfig)],
          extract: 'styles.css'
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ["react", "react-dom", "tailwindcss"]
},
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]