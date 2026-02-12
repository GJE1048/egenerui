# 组件

Egenerui 内置常见的输入/输出/控制/布局组件，均继承自核心 Component，具备一致的 API。

## 导入方式
- 全量引入（默认对象）：`import gr from 'egenerui'`
- 按需导入（命名导入）：`import { Button, Textbox, Slider } from 'egenerui'`

按需导入支持 Tree-shaking，打包时仅保留使用到的组件与 API。

## 分类
- 输入：Textbox、Slider、Checkbox、Radio、Dropdown、Image、File
- 输出：Label、Markdown
- 控制：Button、ThemeToggle
- 布局：Row、Column

## 使用示例

```ts
import gr from 'egenerui'

const name = gr.Textbox({ label: '姓名' })
const ok = gr.Button('提交').primary()
const result = gr.Textbox({ label: '结果', interactive: false })

ok.click((n: string) => `你好，${n}`, { inputs: name, outputs: result })

const ui = gr.Column([
  gr.Row([name]),
  gr.Row([ok]),
  gr.Row([result])
])

gr.launch(ui, { title: '组件示例' })
```

## 深入了解
- 详细 API 请参阅 [组件 API](/api/components)
- 事件与数据绑定请参阅 [事件](/guide/events) 与 [数据绑定](/guide/data-binding)
