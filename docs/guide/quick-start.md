
# 快速上手

在 5 分钟内构建你的第一个 MyGradio 应用。

## 第一步：创建 HTML 文件

创建 `index.html`：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的第一个 MyGradio 应用</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/main.ts"></script>
</body>
</html>
```

## 第二步：创建 TypeScript 文件

创建 `main.ts`：

```typescript
import gr from 'my-gradio'
import 'my-gradio/style.css'

// 定义处理函数
function greet(name: string): string {
  if (!name.trim()) {
    return "请输入你的名字"
  }
  return `你好, ${name}! 👋 欢迎使用 MyGradio!`
}

// 创建组件
const nameInput = gr.Textbox({
  label: "你叫什么名字？",
  placeholder: "在此输入名称...",
  value: "世界"
})

const greetingOutput = gr.Textbox({
  label: "问候语",
  interactive: false
})

const greetButton = gr.Button("打个招呼").primary()

// 绑定事件
greetButton.click(greet, {
  inputs: nameInput,
  outputs: greetingOutput
})

// 布局
const app = gr.Column([
  gr.Markdown("# 🎉 欢迎使用 MyGradio!"),
  gr.Row([nameInput]),
  gr.Row([greetButton]),
  gr.Row([greetingOutput])
])

// 启动应用
gr.Renderer.getInstance().launch(app, {
  target: "#app",
  title: "我的第一个应用"
})
```

## 第三步：运行开发服务器

安装 Vite：

```bash
npm install -D vite
```

运行项目：

```bash
npx vite
```

现在访问 `http://localhost:5173`，你就能看到你的第一个 MyGradio 应用在运行了！

## 接下来

- [按需引入](/guide/installation#_2-按需引入-推荐用于生产环境) - 了解如何优化项目体积
- [组件文档](/components/input/textbox) - 查看所有可用组件
