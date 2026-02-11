
# 按钮 Button

按钮组件用于触发特定的动作或事件处理函数。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Button } from 'my-gradio/components/Button'
```

## 使用示例

### 基础按钮
```typescript
const btn = gr.Button("点击我")
```

### 触发处理函数
```typescript
const name = gr.Textbox({ label: "输入" })
const output = gr.Textbox({ label: "输出" })
const btn = gr.Button("提交").primary()

btn.click((val) => `处理结果: ${val}`, {
  inputs: name,
  outputs: output
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `value` | `string` | - | 按钮显示的文本内容 |
| `variant` | `'primary' \| 'secondary' \| 'stop'` | `'secondary'` | 按钮样式变体 |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| `interactive` | `boolean` | `true` | 是否可点击 |

## 方法 (Methods)

### `click(fn, options)`
绑定点击事件。

**参数:**
- `fn`: 处理函数，接收 `inputs` 的值作为参数。
- `options`:
  - `inputs`: 输入组件（单个或数组）。
  - `outputs`: 输出组件（单个或数组）。
  - `apiName`: 可选，对应的 API 名称。

## 快捷样式方法

- `.primary()`: 设置为主要按钮样式。
- `.secondary()`: 设置为次要按钮样式。
- `.stop()`: 设置为停止/危险按钮样式。
