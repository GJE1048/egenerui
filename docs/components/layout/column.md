
# 列 Column

列布局组件用于垂直排列子组件。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Column } from 'my-gradio/layout'
```

## 使用示例

### 基础用法
```typescript
gr.Column([
  gr.Markdown("# 标题"),
  gr.Textbox({ label: "输入" }),
  gr.Button("提交")
])
```

### 面板样式
```typescript
gr.Column([
  gr.Textbox({ label: "用户名" }),
  gr.Textbox({ label: "密码", type: "password" })
], { variant: 'panel' })
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default' \| 'panel'` | `'default'` | 布局变体，`panel` 会添加边框和内边距 |
| `visible` | `boolean` | `true` | 是否可见 |
| `elemId` | `string` | - | HTML 元素的 ID |
| `elemClasses` | `string[]` | `[]` | HTML 元素的类名列表 |
