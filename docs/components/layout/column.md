# Column

按列排列多个组件，可选面板风格。

**引入方式**

- 按需引入

```ts
import { Column, Textbox, Button } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { Column, Textbox, Button } = gr
```

**基础用法**

```ts
const form = Column([
  Textbox({ label: '用户名' }),
  Textbox({ label: '密码', type: 'password' }),
  Button('登录', { variant: 'primary' })
])
```

**面板风格**

```ts
const panel = Column([
  Textbox({ label: '标题' }),
  Textbox({ label: '内容', lines: 4 })
], { variant: 'panel' })
```

**与 Row 组合**

```ts
import { Row, Column, Textbox, Button } from 'egenerui'

const left = Column([Textbox({ label: '搜索' }), Button('开始')])
const right = Column([Textbox({ label: '结果' }), Button('导出', { variant: 'secondary' })])

Row([left, right])
```

**代码参考**

- 组件实现：[Column.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/layout/src/Column.ts)
