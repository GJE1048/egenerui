# 计算器示例

一个支持加减乘除的简单计算器。

## 完整示例

```typescript
import gr from 'my-gradio'

function calc(aStr: string, bStr: string, op: string): string {
  const a = parseFloat(aStr || '0')
  const b = parseFloat(bStr || '0')
  let result: number
  switch (op) {
    case '加': result = a + b; break
    case '减': result = a - b; break
    case '乘': result = a * b; break
    case '除': 
      if (b === 0) return '错误：除数不能为 0'
      result = a / b; 
      break
    default: result = a + b
  }
  return String(result)
}

const a = gr.Textbox({ label: '数字 A', type: 'number', placeholder: '例如 12' })
const b = gr.Textbox({ label: '数字 B', type: 'number', placeholder: '例如 7' })
const op = gr.Dropdown({ label: '运算', choices: ['加', '减', '乘', '除'], value: '加' })

const run = gr.Button('计算').primary()
const out = gr.Textbox({ label: '结果', interactive: false })

run.click(calc, { inputs: [a, b, op], outputs: out, apiName: 'calc' })

const ui = gr.Column([
  gr.Markdown('# 🧮 简易计算器'),
  gr.Row([a, b]),
  gr.Row([op]),
  gr.Row([run]),
  gr.Row([out])
])

gr.launch(ui, { title: '简易计算器', theme: 'light' })
```

## 提示
- 文本框的 `type: 'number'` 用于数值输入
- 下拉框 `Dropdown` 选择四则运算
- 点击按钮触发计算并展示到只读文本框
