import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  target: 'esnext',
  splitting: false,
  sourcemap: true,
  tsconfig: './tsconfig.json',
  external: ['react']
});
