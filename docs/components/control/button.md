# Button

按钮组件，支持主题、尺寸、图标与点击事件。

**引入方式**

- 按需引入

```ts
import { Button } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { Button } = gr
```

**基础用法**

```ts
const run = Button('开始运行', {
  label: '操作',
  variant: 'primary', // primary | secondary | stop
  size: 'md' // sm | md | lg
})

run.click(() => {
  console.log('点击开始')
})
```

**图标与链接**

```ts
const docs = Button('查看文档', {
  icon: '📖',
  variant: 'secondary',
  link: 'https://example.com/docs'
})
```

**属性 Props**

- variant: 风格主题（'primary' | 'secondary' | 'stop'）
- size: 尺寸（'sm' | 'md' | 'lg'）
- icon: 图标 HTML/字符串
- link: 跳转链接（可选）
- label: 组件标题文本
- showLabel: 是否展示 label

**事件 Events**

- click((val) => void): 点击时触发（val 为按钮文本）
- change((val) => void): 通用变化事件（来自基础组件）

**方法 Methods**

- setValue(value): 更新按钮文本
- enable()/disable(): 切换交互性

**组合示例**

```ts
import { Textbox, Button } from 'egenerui'

const input = Textbox({ label: '输入内容', placeholder: '...' })
const submit = Button('提交', { variant: 'primary' })

submit.click(() => {
  console.log('提交：', input.getValue())
})
```

**代码参考**

- 组件实现：[Button.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/components/src/Button.ts)
