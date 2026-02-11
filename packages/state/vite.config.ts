import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyGradioState',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: (id) => id.startsWith('vue') || id.startsWith('@my-gradio/'),
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
