# 核心 API

MyGradio 的核心由 Component、Renderer、EventSystem、DataBinding 构成，它们提供了声明式 UI 的基础能力。

## Component

组件基类，所有组件均继承自它，负责值管理、事件处理、渲染与布局。

- 标识与类型：id、type
- 值读写：value、getValue()、setValue(value, skipUpdate?)
- 显隐与交互：show()、hide()、enable()、disable()
- 事件：click(handler)、change(handler)
- 数据绑定：setInputs()、setOutputs()、getInputs()、getOutputs()
- 渲染相关：render()、createElement()、updateElement()、updateVisibility()、updateInteractivity()

示例：

```ts
import { Textbox, Button } from 'my-gradio'

const name = Textbox({ label: '姓名', placeholder: '输入你的名字' })
const greet = Button('问候', { variant: 'primary' })

greet.click(() => {
  alert(`你好，${name.getValue() || '匿名'}！`)
})
```

## Renderer

负责将组件树渲染到页面并挂载。

- 单例访问：Renderer.getInstance()
- 启动渲染：launch(ui, options)
  - options: { target?, title?, theme?, css?, head? }
- 组件查询：getComponent(id)
- 关闭：close()

示例：

```ts
import { Renderer, Textbox, Button, Row } from 'my-gradio'

const ui = Row([
  Textbox({ label: '城市' }),
  Button('查询', { variant: 'primary' })
])

Renderer.getInstance().launch(ui, { title: '天气查询', theme: 'light', target: '#app' })
```

## EventSystem

事件编排系统，用于将输入组件、输出组件与业务函数绑定。

- 单例访问：EventSystem.getInstance()
- 注册绑定：register(componentId, event, binding)
- 触发事件：trigger(componentId, event, eventData?)
- 清理绑定：clear(componentId, event?)

binding 结构：

```ts
{
  fn: (...inputs) => any,
  inputs: Component[],
  outputs: Component[],
  preprocess?: (values) => values,
  postprocess?: (result) => result,
  apiName?: string,
  queue?: boolean
}
```

## DataBinding

简化的组件间数据绑定工具。

- 单向绑定：DataBinding.bind(source, target, transform?)
- 双向绑定：DataBinding.twoWay(a, b)
- 计算属性：DataBinding.computed(sources, computeFn)

示例：

```ts
import { Slider, Textbox, DataBinding } from 'my-gradio'

const s = Slider({ minimum: 0, maximum: 100, value: 50 })
const t = Textbox({ label: '百分比' })

DataBinding.bind(s, t, v => `${v}%`)
```
