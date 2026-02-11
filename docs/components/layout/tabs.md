# Tabs

选项卡布局（规划中）。

**说明**

- 当前版本尚未提供 Tabs 组件实现
- 预计 API 将允许通过 `Tabs([{ label, content }])` 定义多个页签
- 支持切换事件与默认激活项

**建议替代**

- 使用 Row/Column 与 Button 组合实现简单的“页签”效果
- 或通过 Router/StateManager 自行管理视图切换

**示例：替代实现**

```ts
import { Row, Button, Column, Textbox } from 'egenerui'

const tab1 = Column([Textbox({ label: '内容 A' })], { variant: 'panel' })
const tab2 = Column([Textbox({ label: '内容 B' })], { variant: 'panel' })

const showA = Button('A')
const showB = Button('B')

Row([showA, showB])

showA.click(() => {
  tab1.show(); tab2.hide()
})
showB.click(() => {
  tab1.hide(); tab2.show()
})
```
