# 声明式 UI

Egenerui 以声明式的方式构建界面：通过组合组件与定义事件来描述“界面是什么”和“发生什么”，而非逐步操作 DOM。

## 基本思想
- 组件是数据的视图：每个组件维护自身的值与交互状态
- 布局是组件的组合：Row/Column 负责结构与风格
- 事件编排而非回调地狱：Button.click 将输入/输出绑定到业务函数

## 示例

```ts
import gr from 'egenerui'

const name = gr.Textbox({ label: '姓名', placeholder: '输入你的名字' })
const greet = gr.Button('问候').primary()
const out = gr.Markdown({ value: '### 结果将显示在此处' })

greet.click((n: string) => `你好，**${n || '匿名'}**！`, {
  inputs: name,
  outputs: out,
  apiName: 'greet'
})

const ui = gr.Column([
  gr.Markdown('# 声明式 UI 示例'),
  gr.Row([name]),
  gr.Row([greet]),
  gr.Row([out])
])

gr.launch(ui, { title: '声明式 UI', theme: 'light' })
```

## 好处
- 可读性强：界面结构与业务逻辑清晰分离
- 易维护：输入/输出与事件绑定规则统一
- 易扩展：组件、主题、状态与客户端均可按需使用
