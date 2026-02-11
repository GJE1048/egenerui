# Row

按行排列多个组件，支持等高、面板风格与最小宽度。

**引入方式**

- 按需引入

```ts
import { Row, Textbox, Button } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { Row, Textbox, Button } = gr
```

**基础用法**

```ts
const a = Textbox({ label: 'A' })
const b = Textbox({ label: 'B' })
const action = Button('提交')

const row = Row([a, b, action], {
  equalHeight: true,
  minWidth: 240
})
```

**属性 Props**

- equalHeight: 行内子项等高
- variant: 'default' | 'panel'，面板风格
- minWidth: 子项最小宽度（像素）
- scale: 子项伸缩因子（来自基础组件）

**使用 scale 控制占比**

```ts
const x = Textbox({ label: 'X', scale: 2 })
const y = Textbox({ label: 'Y', scale: 1 })
const z = Button('执行', { scale: 1 })

Row([x, y, z])
```

**嵌套布局**

```ts
import { Row, Column, Textbox, Button } from 'egenerui'

const left = Column([
  Textbox({ label: '姓名' }),
  Textbox({ label: '邮箱' })
], { variant: 'panel' })

const right = Column([
  Button('保存'),
  Button('取消', { variant: 'secondary' })
])

Row([left, right], { equalHeight: true })
```

**代码参考**

- 组件实现：[Row.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/layout/src/Row.ts)
