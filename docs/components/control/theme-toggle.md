# ThemeToggle

切换浅色/深色主题的快捷按钮，自动显示当前主题图标。

**引入方式**

- 按需引入

```ts
import { ThemeToggle } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { ThemeToggle } = gr
```

**基础用法**

```ts
const toggle = ThemeToggle()

toggle.click(() => {
  console.log('切换主题')
})
```

**行为说明**

- 初始根据当前主题显示图标：浅色为 ☀️，深色为 🌙
- 点击后调用 ThemeManager 切换主题
- 监听 `theme:changed` 事件以保持图标与主题同步

**样式**

- 默认类名：`gr-theme-toggle`
- 继承 Button 的基础样式与交互

**组合示例**

```ts
import { ThemeToggle, Textbox, Row } from 'egenerui'

const name = Textbox({ label: '用户名', placeholder: '输入用户名' })
const toggle = ThemeToggle()

Row([name, toggle])
```

**代码参考**

- 组件实现：[ThemeToggle.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/components/src/ThemeToggle.ts)
