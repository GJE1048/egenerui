
# 文本框 Textbox

文本框是用于输入单行或多行文本的组件。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Textbox } from 'my-gradio/components/Textbox'
```

## 使用示例

### 基础文本框
```typescript
const name = gr.Textbox({
  label: "姓名",
  placeholder: "请输入你的姓名"
})
```

### 多行文本框
```typescript
const bio = gr.Textbox({
  label: "个人简介",
  lines: 5,
  maxLines: 10,
  placeholder: "介绍一下你自己..."
})
```

### 密码输入
```typescript
const password = gr.Textbox({
  label: "密码",
  type: "password",
  placeholder: "请输入密码"
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `value` | `string` | `''` | 初始值 |
| `placeholder` | `string` | - | 输入框占位符 |
| `lines` | `number` | `1` | 初始行数，大于1时渲染为 `textarea` |
| `maxLines` | `number` | `20` | 最大行数 |
| `type` | `'text' \| 'password'` | `'text'` | 输入类型 |
| `interactive` | `boolean` | `true` | 是否可交互（非只读） |
| `showLabel` | `boolean` | `true` | 是否显示标签 |

## 事件 (Events)

| 事件名 | 说明 |
|------|-------------|
| `change` | 当输入值发生改变时触发 |
| `submit` | 当在输入框按下回车键时触发 |
