# Accordion

折叠面板（规划中）。

**说明**

- 当前版本尚未提供 Accordion 组件实现
- 预计 API 将支持 `Accordion([{ title, content, open }])` 定义面板组
- 提供展开/折叠事件与默认展开项

**建议替代**

- 使用 Column + Button 组合，手动控制显示/隐藏
- 或通过 StateManager 管理展开状态

**示例：替代实现**

```ts
import { Column, Button, Textbox } from 'egenerui'

const section1 = Column([Textbox({ label: '面板 1 内容' })], { variant: 'panel' })
const section2 = Column([Textbox({ label: '面板 2 内容' })], { variant: 'panel' })

const toggle1 = Button('切换面板 1')
const toggle2 = Button('切换面板 2')

toggle1.click(() => {
  if (section1.getValue() === undefined) section1.show()
  else section1.hide()
})

toggle2.click(() => {
  if (section2.getValue() === undefined) section2.show()
  else section2.hide()
})
```
