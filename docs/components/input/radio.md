# Radio

用于创建单选组或复选组。支持字符串与对象选项、默认值、禁用交互等。

**引入方式**

- 按需引入

```ts
import { Radio } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { Radio } = gr
```

**基础用法**

```ts
const gender = Radio({
  label: '性别',
  type: 'radio',
  choices: ['男', '女', '其他'],
  value: '男'
})

const hobbies = Radio({
  label: '兴趣',
  type: 'checkbox',
  choices: [
    { label: '编程', value: 'code' },
    { label: '运动', value: 'sport' },
    { label: '阅读', value: 'read' }
  ],
  value: ['code', 'read']
})
```

**属性 Props**

- choices: 选项数组，支持字符串或 { label, value }
- value: 当前值；radio 为任意类型，checkbox 为数组
- type: 'radio' | 'checkbox'，决定呈现为单选或多选
- showLabel: 是否展示组件 label
- interactive: 是否可交互（来自基础组件）

**事件 Events**

- change((val) => void): 值变化时触发

```ts
gender.change((val) => {
  console.log('选择：', val)
})

hobbies.change((vals) => {
  console.log('复选：', vals)
})
```

**方法 Methods**

- setChoices(choices): 运行时更新选项
- check(value): 设定选中值（radio 场景）
- setValue(value): 通用更新值（来自基础组件）

```ts
gender.setChoices(['男', '女', '其他', '保密'])
gender.check('保密')

hobbies.setChoices([
  { label: '编程', value: 'code' },
  { label: '音乐', value: 'music' }
]).setValue(['music'])
```

**示例：动态联动**

```ts
import gr, { Radio, Dropdown } from 'egenerui'

const category = Radio({
  label: '类别',
  type: 'radio',
  choices: ['水果', '饮料']
})

const item = Dropdown({
  label: '具体',
  choices: []
})

category.change((val) => {
  const map = {
    '水果': ['苹果', '香蕉', '橙子'],
    '饮料': ['水', '咖啡', '茶']
  }
  item.setChoices(map[val] || []).select('')
})

gr.launch([category, item])
```

**代码参考**

- 组件实现：[Radio.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/components/src/Radio.ts)
