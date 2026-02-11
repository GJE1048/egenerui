import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyGradio',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      output: {
        exports: 'named'
      }
    },
    emptyOutDir: true
  },
  resolve: {
    alias: [
      { find: '@my-gradio/core', replacement: resolve(__dirname, '../core/src') },
      { find: '@my-gradio/theme', replacement: resolve(__dirname, '../theme/src') }
    ]
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      // Do not bundle types to avoid API Extractor internal error
      entryRoot: 'src',
      include: ['src/**/*.ts', '../**/src/**/*.ts'],
      exclude: ['../**/examples/**/*', '../../examples/**/*', '../../docs/**/*'],
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@my-gradio/core': ['../core/src/index.ts'],
          '@my-gradio/components': ['../components/src/index.ts'],
          '@my-gradio/layout': ['../layout/src/index.ts'],
          '@my-gradio/api': ['../api/src/index.ts'],
          '@my-gradio/state': ['../state/src/index.ts'],
          '@my-gradio/theme': ['../theme/src/index.ts']
        }
      }
    })
  ]
})
