# 导入与打包指南

本指南覆盖 ESM/CJS 引入方式、按需导入与 Tree-shaking、样式引入策略，以及常见打包问题排查。

## ESM 引入

```ts
import gr from 'my-gradio'
import 'my-gradio/style.css'

const name = gr.Textbox({ label: '姓名' })
const submit = gr.Button('提交').primary()
```

命名导入（按需导入）：

```ts
import { Textbox, Button } from 'my-gradio'
import 'my-gradio/style.css'

const name = Textbox({ label: '姓名' })
const submit = Button('提交', { variant: 'primary' })
```

## CJS 引入

```js
const gr = require('my-gradio')
require('my-gradio/style.css')

const name = gr.Textbox({ label: '姓名' })
const submit = gr.Button('提交')
```

命名导入（需工具链支持转译）：

```js
const { Textbox, Button } = require('my-gradio')
require('my-gradio/style.css')
```

## 按需导入与 Tree-shaking
- 建议使用 `import { ... } from 'my-gradio'` 命名导入，未使用的导出在生产构建中会被移除。
- 生产模式下构建更容易触发 Tree-shaking（Vite/webpack 默认启用）。
- 避免使用子路径导入，如 `my-gradio/components/...`，请从包入口导入。

## 样式引入策略
- 模块方式：`import 'my-gradio/style.css'`，适合 ESM/CJS 工程。
- CDN 方式：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/my-gradio@latest/dist/style.css">
<script type="module">
  import gr from 'https://cdn.jsdelivr.net/npm/my-gradio@latest/+esm'
</script>
```

自定义样式可在工程 `style.css` 中覆盖变量或类名，或通过主题系统进行统一调整。

## 构建工具示例

Vite：

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    sourcemap: false
  }
})
```

webpack 5：

```js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true
  }
}
```

## 常见问题排查
- 子路径导入报错：改为从包入口导入 `import { Button } from 'my-gradio'`。
- Tree-shaking 无效：开启生产构建并使用命名导入；避免在运行时动态引用整个包。
- 样式未生效：确认已引入 `my-gradio/style.css` 或正确加载 CDN 样式。
- CJS 环境不支持命名导入：确保工具链转译 CommonJS 或改用默认对象导入。
- 构建后体积过大：检查是否无意全量导入；使用命名导入并移除未使用代码路径。

## 参考
- 安装与引入：[安装](./installation.md)
- 组件总览：[组件](./components.md)
