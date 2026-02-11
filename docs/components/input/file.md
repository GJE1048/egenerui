
# 文件 File

文件组件用于上传或显示文件，支持拖拽和多文件上传。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { File } from 'my-gradio/components/File'
```

## 使用示例

### 基础文件上传
```typescript
const file = gr.File({
  label: "上传文档",
  fileTypes: [".pdf", ".doc", ".docx"]
})
```

### 多文件上传
```typescript
const attachments = gr.File({
  label: "附件",
  fileCount: 5
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `fileTypes` | `string[]` | - | 允许的文件扩展名（如 `['.png', '.jpg']`） |
| `fileCount` | `number` | `1` | 允许上传的最大文件数量 |
| `type` | `'file' \| 'binary' \| 'bytes'` | `'file'` | 返回的数据类型 |
| `interactive` | `boolean` | `true` | 是否可交互 |
| `showLabel` | `boolean` | `true` | 是否显示标签 |

## 数据结构 (FileData)

上传后返回的数据结构如下：

```typescript
interface FileData {
  file: File        // 原生 File 对象
  name: string      // 文件名
  size: number      // 文件大小（字节）
  type: string      // MIME 类型
  data?: string     // Base64 编码的数据（取决于 type 配置）
}
```

## 事件 (Events)

| 事件名 | 说明 |
|------|-------------|
| `change` | 当文件被添加或移除时触发 |
