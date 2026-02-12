import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyGradioThemeToggle',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['@my-gradio/core', '@my-gradio/button'],
      output: {
        globals: {
          '@my-gradio/core': 'MyGradioCore',
          '@my-gradio/button': 'MyGradioButton'
        }
      }
    }
  },
  plugins: [dts()]
})
