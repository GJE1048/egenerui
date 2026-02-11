
# 下拉框 Dropdown

下拉框组件用于从列表中选择一个或多个值。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Dropdown } from 'my-gradio/components/Dropdown'
```

## 使用示例

### 基础下拉框
```typescript
const dropdown = gr.Dropdown({
  label: "选择城市",
  choices: ["北京", "上海", "广州", "深圳"],
  value: "北京"
})
```

### 多选下拉框
```typescript
const skills = gr.Dropdown({
  label: "选择技能",
  choices: ["TypeScript", "Python", "Rust", "Go"],
  multiselect: true,
  value: ["TypeScript", "Python"]
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `choices` | `(string \| { label: string; value: any })[]` | `[]` | 选项列表 |
| `value` | `any` | - | 初始选中的值（多选时为数组） |
| `multiselect` | `boolean` | `false` | 是否支持多选 |
| `allowCustomValue` | `boolean` | `false` | 是否允许输入自定义值 |
| `interactive` | `boolean` | `true` | 是否可交互 |
| `showLabel` | `boolean` | `true` | 是否显示标签 |

## 事件 (Events)

| 事件名 | 说明 |
|------|-------------|
| `change` | 当选中的值发生改变时触发 |
