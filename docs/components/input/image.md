
# 图片 Image

图片组件用于显示图像内容。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Image } from 'my-gradio/components/Image'
```

## 使用示例

### 基础图片
```typescript
const img = gr.Image("https://example.com/image.png")
```

### 带配置的图片
```typescript
const profile = gr.Image({
  label: "用户头像",
  src: "avatar.jpg",
  width: 200,
  height: 200,
  alt: "User Avatar"
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `src` | `string` | `''` | 图片 URL 或 Base64 数据 |
| `alt` | `string` | - | 图片替代文本 |
| `width` | `number \| string` | - | 图片宽度 |
| `height` | `number \| string` | - | 图片高度 |
| `showLabel` | `boolean` | `true` | 是否显示标签 |
