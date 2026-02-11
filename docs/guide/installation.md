
# 安装

本指南将帮助你在项目中安装并配置 MyGradio。

## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 pnpm >= 8.0.0

## 安装方法

### 使用 npm

```bash
npm install my-gradio
```

### 使用 yarn

```bash
yarn add my-gradio
```

### 使用 pnpm

```bash
pnpm add my-gradio
```

## 引入方式

### 1. 全量引入 (推荐用于小型项目)

如果你想快速上手，可以直接引入整个包：

```typescript
import gr from 'my-gradio'
import 'my-gradio/style.css'

const app = gr.Column([
  gr.Textbox({ label: "名称" }),
  gr.Button("提交")
])
```

### 2. 按需引入 (推荐用于生产环境)

MyGradio 支持基于 ES Modules 的按需引入。通过这种方式，打包工具（如 Vite, Webpack）会自动剔除未使用的组件代码，从而减小最终生成的 JS 体积。

你可以直接从子路径导入组件：

```typescript
// 仅导入需要的组件和布局
import { Textbox } from 'my-gradio/components/Textbox'
import { Button } from 'my-gradio/components/Button'
import { Column } from 'my-gradio/layout'
import { Renderer } from 'my-gradio/core'

// 使用组件
const name = Textbox({ label: "名称" })
const submitBtn = Button("提交")

const app = Column([name, submitBtn])

// 启动渲染
Renderer.getInstance().launch(app)
```

> **注意**：即使使用按需引入，通常也需要引入全局样式文件：
> `import 'my-gradio/style.css'`

### 3. CDN 方式

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/my-gradio@latest/dist/style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module">
    import gr from 'https://cdn.jsdelivr.net/npm/my-gradio@latest/+esm'
    
    const app = gr.Textbox({ label: "你好 MyGradio" })
    gr.Renderer.getInstance().launch(app)
  </script>
</body>
</html>
```

## 下一步

- [快速上手](/guide/quick-start) - 构建你的第一个应用
- [项目结构](/guide/project-structure) - 了解项目布局
