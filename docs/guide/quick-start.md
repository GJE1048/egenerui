
# 快速上手

用 5 分钟构建你的第一个 MyGradio 应用。

## 步骤一：创建 HTML 文件

创建 `index.html`：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First MyGradio App</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/main.ts"></script>
</body>
</html>
```

## 步骤二：创建 TypeScript 文件

创建 `main.ts`：

```typescript
import gr from 'my-gradio'

// 处理函数
function greet(name: string): string {
  if (!name.trim()) {
    return "请输入你的名字"
  }
  return `你好，${name}！👋 欢迎使用 MyGradio！`
}

// 组件
const nameInput = gr.Textbox({
  label: "你的名字？",
  placeholder: "在此输入...",
  value: "世界"
})

const greetingOutput = gr.Textbox({
  label: "问候语",
  interactive: false
})

const greetButton = gr.Button("打个招呼").primary()

// 事件绑定
greetButton.click(greet, {
  inputs: nameInput,
  outputs: greetingOutput,
  apiName: "greet"
})

// 布局
const interface = gr.Column([
  gr.Markdown("# 🎉 欢迎使用 MyGradio！"),
  gr.Row([nameInput]),
  gr.Row([greetButton]),
  gr.Row([greetingOutput])
])

// 启动应用
gr.launch(interface, {
  target: "#app",
  title: "我的第一个应用",
  theme: "light"
})
```

## 步骤三：配置 Vite

安装 Vite：

```bash
npm install -D vite
```

创建 `vite.config.ts`：

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000
  }
})
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

## 步骤四：运行开发服务器

```bash
npm run dev
```

打开浏览器访问 `http://localhost:3000`，你将看到：

1. 标题 “欢迎使用 MyGradio！”
2. 一个文本输入框
3. 一个“打个招呼”按钮
4. 一个输出框

输入你的名字并点击按钮，输出框将显示问候语！

## 项目结构

一个典型的 MyGradio 项目结构：

```
my-app/
├── index.html              # HTML entry file
├── main.ts                 # App entry
├── package.json            # Project config
├── vite.config.ts          # Vite config
├── tsconfig.json           # TypeScript config
└── public/                 # Static assets
```

## 下一步

- [组件](/components/input/textbox) - 浏览所有可用组件
- [主题](/guide/theming) - 自定义外观
- [状态管理](/guide/state-management) - 持久化用户数据
