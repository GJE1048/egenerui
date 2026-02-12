# 组件 API

Egenerui 提供常用输入/输出/控制/布局组件，均继承自核心 Component，并具有一致的配置方式。


## 输入组件

- Textbox({ placeholder?, type?, showLabel?, autofocus? })
- Slider({ minimum?, maximum?, step?, value?, showLabel?, interactive? })
- Checkbox({ value?, label? })
- Radio({ choices?, value?, type?: 'radio' | 'checkbox', showLabel? })
- Dropdown({ choices?, value?, multiselect?, allowCustomValue?, showLabel? })
- Image({ src?, alt?, width?, height? })
- File({ fileTypes?, fileCount?, showLabel?, showDownloadButton?, type? })

示例：

```ts
import { Textbox, Slider, Checkbox } from 'egenerui'

const name = Textbox({ label: '姓名' })
const volume = Slider({ label: '音量', minimum: 0, maximum: 100, value: 30 })
const agree = Checkbox({ label: '我已阅读协议' })
```

## 输出组件

- Label 用于展示文本
- Markdown 用于渲染 Markdown 内容

```ts
import { Markdown } from 'egenerui'
const md = Markdown({ value: '# 标题\n\n这是说明文本' })
```

## 控制组件

- Button(label, { variant?: 'primary' | 'secondary' | 'stop', size?: 'sm' | 'md' | 'lg', icon?, link? })
- ThemeToggle() 切换浅/深色主题

```ts
import { Button } from 'egenerui'
const submit = Button('提交', { variant: 'primary' })
submit.click(() => console.log('提交中...'))
```

## 布局组件

- Row(components[], { equalHeight?, variant?: 'default' | 'panel' })
- Column(components[], { variant?: 'default' | 'panel' })

```ts
import { Row, Column, Textbox, Button } from 'egenerui'

const form = Column([
  Textbox({ label: '邮箱' }),
  Row([ Button('保存'), Button('取消') ], { variant: 'panel' })
])
```
