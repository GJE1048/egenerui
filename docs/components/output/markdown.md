# Markdown

展示 Markdown 文本，支持可选的换行与 LaTeX 渲染。

**引入方式**

- 按需引入

```ts
import { Markdown } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { Markdown } = gr
```

**基础用法**

```ts
const md = Markdown({
  label: '说明',
  value: '# 标题\n这是一段说明文本',
  showLabel: true
})
```

**换行与 LaTeX**

```ts
const math = Markdown({
  value: '行内公式：$a^2+b^2=c^2$\n\n块公式：\n$$E=mc^2$$',
  lineBreaks: true,
  latex: true
})
```

启用 LaTeX 时需在页面引入 MathJax 或 KaTeX 并调用渲染。

**更新内容**

```ts
md.update('## 二级标题\n新的内容')
md.append('\n追加一段文本')
```

**属性 Props**

- value: 初始 Markdown 文本
- showLabel: 是否展示 label
- lineBreaks: 是否将换行符转为 <br/>
- latex: 是否启用 LaTeX 公式标记

**代码参考**

- 组件实现：[Markdown.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/components/src/Markdown.ts)
