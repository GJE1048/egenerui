
# Markdown

Markdown 组件用于渲染和显示富文本内容。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { Markdown } from 'my-gradio/components/Markdown'
```

## 使用示例

### 基础用法
```typescript
const md = gr.Markdown("# 这是一个标题\n你可以使用 **Markdown** 语法来编写内容。")
```

### 动态更新内容
```typescript
const content = gr.Markdown("初始内容")

// 稍后更新
content.setValue("# 新标题\n内容已更新。")
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `value` | `string` | `''` | Markdown 格式的文本内容 |
| `showLabel` | `boolean` | `true` | 是否显示标签 |
| `latex` | `boolean` | `false` | 是否启用 LaTeX 支持（需配合相关插件） |

## 支持的语法

- 标题 (`#`, `##`, `###`)
- 加粗 (`**text**`) 和 斜体 (`*text*`)
- 链接 (`[text](url)`)
- 图片 (`![alt](url)`)
- 代码块 (使用 \`\`\` 包裹) 和 行内代码 (使用 \` 包裹)
- 引用 (`> text`)
- 列表 (无序 `-` 或 `*`，有序 `1.`)
