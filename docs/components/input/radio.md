
# 单选框 Radio

单选框组件用于在一组互斥的选项中选择一个。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Radio } from 'my-gradio/components/Radio'
```

## 使用示例

### 基础单选框
```typescript
const radio = gr.Radio({
  label: "选择语言",
  choices: ["中文", "English", "日本語"],
  value: "中文"
})
```

### 使用对象选项
```typescript
const theme = gr.Radio({
  label: "选择主题",
  choices: [
    { label: "浅色", value: "light" },
    { label: "深色", value: "dark" },
    { label: "跟随系统", value: "system" }
  ],
  value: "light"
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `choices` | `(string \| { label: string; value: any })[]` | `[]` | 选项列表 |
| `value` | `any` | `''` | 当前选中的值 |
| `interactive` | `boolean` | `true` | 是否可交互 |
| `showLabel` | `boolean` | `true` | 是否显示标签 |

## 事件 (Events)

| 事件名 | 说明 |
|------|-------------|
| `change` | 当选中的选项发生改变时触发 |
