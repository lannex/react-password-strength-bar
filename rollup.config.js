import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

import pkg from './package.json';

module.exports = {
  input: 'lib/index.tsx',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    globals: {
      react: 'React',
    },
  },
  plugins: [
    external(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    resolve(),
    commonjs(),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    process.env.NODE_ENV === 'production' && uglify(),
  ],
};
