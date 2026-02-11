# 数据绑定

DataBinding 提供简化的组件间数据联动能力，包括单向、双向与计算属性。

## 单向绑定

```ts
import { Slider, Textbox, DataBinding } from 'my-gradio'

const s = Slider({ label: '百分比', minimum: 0, maximum: 100, value: 50 })
const t = Textbox({ label: '显示值' })

DataBinding.bind(s, t, v => `${v}%`)
```

## 双向绑定

```ts
import { Textbox, DataBinding } from 'my-gradio'

const a = Textbox({ label: 'A' })
const b = Textbox({ label: 'B' })

DataBinding.twoWay(a, b)
```

## 计算属性

```ts
import { Textbox, DataBinding } from 'my-gradio'

const a = Textbox({ label: 'A' })
const b = Textbox({ label: 'B' })

const sum = DataBinding.computed([a, b], (x: string, y: string) => {
  return String(Number(x || 0) + Number(y || 0))
})
```

> 提示：计算属性返回的是一个只读组件代理，适合在展示类组件中读取值。
