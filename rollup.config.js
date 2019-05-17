import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

module.exports = {
  input: 'lib/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    globals: {
      react: 'React',
    },
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    process.env.NODE_ENV === 'production' && uglify(),
  ],
};
