import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { glob } from 'glob'

export default defineConfig({
  build: {
    lib: {
      entry: glob.sync(resolve(__dirname, 'src/*.ts')),
      formats: ['es']
    },
    rollupOptions: {
      external: (id) => id.startsWith('vue') || id.startsWith('@my-gradio/'),
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js'
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
