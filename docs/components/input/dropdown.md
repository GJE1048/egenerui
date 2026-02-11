# Dropdown

下拉选择，支持单选/多选与自定义值输入。

**引入方式**

- 按需引入

```ts
import { Dropdown } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { Dropdown } = gr
```

**基础用法**

```ts
const city = Dropdown({
  label: '城市',
  choices: ['北京', '上海', '广州', '深圳'],
  value: '北京'
})
```

**多选与自定义值**

```ts
const tags = Dropdown({
  label: '标签',
  multiselect: true,
  allowCustomValue: true,
  choices: [
    { label: '前端', value: 'fe' },
    { label: '后端', value: 'be' },
    { label: 'AI', value: 'ai' }
  ],
  value: ['fe', 'ai']
})
```

**属性 Props**

- choices: 选项数组，支持字符串或 { label, value }
- value: 当前值；multiselect 时为数组
- multiselect: 是否开启多选
- allowCustomValue: 是否允许直接输入自定义值
- showLabel: 是否展示组件 label
- interactive: 是否可交互（来自基础组件）

**事件 Events**

- change((val) => void): 值变化时触发

```ts
city.change((val) => {
  console.log('选择城市：', val)
})

tags.change((vals) => {
  console.log('选择标签：', vals)
})
```

**方法 Methods**

- setChoices(choices): 运行时更新选项
- select(value): 选择某个值
- setValue(value): 通用更新值（来自基础组件）

```ts
city.setChoices(['杭州', '合肥', '成都']).select('成都')
tags.setChoices(['A', 'B', 'C']).setValue(['A'])
```

**示例：联动自定义值**

```ts
const model = Dropdown({
  label: '模型',
  choices: ['gpt-4', 'llama2'],
  allowCustomValue: true
})

model.change((val) => {
  if (val && !['gpt-4', 'llama2'].includes(val)) {
    console.log('使用自定义模型：', val)
  }
})
```

**代码参考**

- 组件实现：[Dropdown.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/components/src/Dropdown.ts)
