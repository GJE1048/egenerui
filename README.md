# Egenerui

用于构建工具界面的声明式 UI 框架。通过统一的组件 API、事件编排与主题系统，让前端与后端的交互更简单。

## 特性
- 组件统一：Textbox、Button、Slider、Checkbox、Radio、Dropdown、Image、File、Markdown
- 事件编排：以输入/输出的方式组合业务逻辑
- 状态与主题：内置状态管理与主题切换
- 文档网站：基于 VitePress，支持示例与组件预览

## 目录结构
```
egenerui/
├── packages/                # 库源码（core/components/layout/theme 等）
├── docs/                    # 文档网站（VitePress）
├── examples/                # 使用示例
├── index.html               # 简易示例入口
├── package.json
└── README.md
```

## 快速开始

### 安装依赖
```bash
npm install
```

### 运行文档
```bash
npm run docs:dev
# 浏览器访问：http://localhost:5173/egenerui/
```

### 构建与预览文档
```bash
npm run docs:build
npm run docs:preview
```

> GitHub Pages 部署时，需要将 VitePress 的 `base` 配置为 `/egenerui/`，以确保静态资源正确加载。<mccoremem id="01KH68P4F6MQY5FPT2ZF127754" />

## 使用示例
```ts
import gr from 'egenerui'

const name = gr.Textbox({ label: '姓名', placeholder: '请输入姓名' })
const submit = gr.Button('提交', { variant: 'primary' })
const result = gr.Markdown({ label: '结果', value: '' })

submit.click((n: string) => `你好，${n}`, { inputs: name, outputs: result })

gr.launch([ name, submit, result ], { title: 'Egenerui 示例' })
```

## 部署到 GitHub Pages（示例流程）
1. 在 `docs/.vitepress/config.ts` 中确认 `base: '/egenerui/'`
2. 构建文档：`npm run docs:build`
3. 将 `.vitepress/dist` 发布到 `gh-pages` 分支（可用 GitHub Actions 或本地推送）
4. 打开仓库 Settings → Pages，选择 `gh-pages` 作为发布源
5. 数分钟后即可访问你的文档站点（通常 1–3 分钟）

## 许可证
MIT
