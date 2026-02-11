
# 滑块 Slider

滑块组件用于在指定范围内选择数值。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Slider } from 'my-gradio/components/Slider'
```

## 使用示例

### 基础滑块
```typescript
const slider = gr.Slider({
  label: "音量",
  minimum: 0,
  maximum: 100,
  value: 50,
  step: 1
})
```

### 浮点数滑块
```typescript
const temperature = gr.Slider({
  label: "温度",
  minimum: -20,
  maximum: 50,
  value: 20,
  step: 0.5
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `minimum` | `number` | `0` | 最小值 |
| `maximum` | `number` | `100` | 最大值 |
| `step` | `number` | `1` | 步长 |
| `value` | `number` | `0` | 初始值 |
| `interactive` | `boolean` | `true` | 是否可交互 |
| `showLabel` | `boolean` | `true` | 是否显示标签 |

## 事件 (Events)

| 事件名 | 说明 |
|------|-------------|
| `change` | 当滑块数值发生改变时触发 |
