# 事件

事件系统用于将输入组件、输出组件与业务函数绑定，形成清晰的编排流程。

## Button.click

绑定示例：

```ts
import gr from 'my-gradio'

const a = gr.Textbox({ label: 'A' })
const b = gr.Textbox({ label: 'B' })
const run = gr.Button('相加').primary()
const out = gr.Textbox({ label: '结果', interactive: false })

run.click((x: string, y: string) => Number(x || 0) + Number(y || 0), {
  inputs: [a, b],
  outputs: out,
  apiName: 'sum'
})
```

## 事件系统概念
- inputs：作为函数参数从组件读取值
- outputs：将函数返回值写入组件（支持数组返回对应下标）
- preprocess/postprocess：前后处理钩子
- apiName：为该绑定提供一个可识别的名称

更多细节请参阅 [核心 API](/api/core) 中的 EventSystem。
