
# 行 Row

行布局组件用于水平排列子组件。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Row } from 'my-gradio/layout'
```

## 使用示例

### 基础用法
```typescript
gr.Row([
  gr.Textbox({ label: "姓" }),
  gr.Textbox({ label: "名" })
])
```

### 面板样式
```typescript
gr.Row([
  gr.Button("取消"),
  gr.Button("确定").primary()
], { variant: 'panel' })
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `variant` | `'default' \| 'panel'` | `'default'` | 布局变体，`panel` 会添加边框和内边距 |
| `equalHeight` | `boolean` | `false` | 是否强制所有子组件等高 |
| `scale` | `number` | `1` | 伸缩比例 |
| `minWidth` | `number` | - | 子组件的最小宽度（像素） |
