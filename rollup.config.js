import path from 'path';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);

export default {
  input: resolvePath('./src/index.ts'),
  output: {
    name: 'browserRouterObserver',
    file: resolvePath('./dist/bro.min.js'),
    format: 'umd',
  },
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: resolvePath('./src') },
      ],
    }),
    resolve(),
    commonjs(),
    json(),
    eslint(),
    typescript(),
    terser(),
  ],
};
