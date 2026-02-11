import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyGradioCore',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named'
      }
    },
    emptyOutDir: true
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@my-gradio/*': ['../../*']
        }
      }
    })
  ]
})
