# Label

“标签”不是独立组件，而是所有组件共有的显示标题能力。

**使用方式**

- 所有组件的配置都支持 `label` 与 `showLabel`
- 通过 `label: '...'` 设置标题文本
- 通过 `showLabel: false` 隐藏标题

```ts
import { Textbox, Button } from 'egenerui'

const name = Textbox({ label: '姓名', placeholder: '输入姓名' })
const submit = Button('提交', { label: '操作', showLabel: true })
```

**最佳实践**

- 表单输入建议使用清晰、简短的 label
- 操作按钮如需标题，可用于分组或说明
- 在紧凑布局下可以关闭 label，仅保留占位或图标

**相关类型**

- 统一配置类型：[ComponentConfig](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/core/src/Component.ts#L1-L12)

**示例：隐藏标题**

```ts
import { Slider } from 'egenerui'
const rating = Slider({ label: '评分', showLabel: false })
```
