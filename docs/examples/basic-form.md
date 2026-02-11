
# 基础表单示例

一个包含文本输入与校验的简单注册表单。

## 完整示例

```typescript
import gr from 'egenerui'

function processForm(name: string, email: string, age: number): string {
  return `姓名：${name}\n邮箱：${email}\n年龄：${age}`
}

// 组件
const name = gr.Textbox({
  label: "姓名",
  placeholder: "请输入你的姓名",
  value: "张三"
})

const email = gr.Textbox({
  label: "邮箱",
  type: "email",
  placeholder: "your.email@example.com"
})

const age = gr.Slider({
  label: "年龄",
  minimum: 0,
  maximum: 100,
  value: 25
})

const submit = gr.Button("提交").primary()
const reset = gr.Button("重置")
const result = gr.Textbox({
  label: "结果",
  lines: 5,
  interactive: false
})

// 事件绑定
submit.click(processForm, {
  inputs: [name, email, age],
  outputs: result,
  apiName: "process_form"
})

reset.click(() => {
  name.setValue('')
  email.setValue('')
  age.setValue(25)
  return '已重置'
}, { outputs: result })

// 布局
const ui = gr.Column([
  gr.Markdown("# 📝 注册表单"),
  gr.Row([name]),
  gr.Row([email]),
  gr.Row([age]),
  gr.Row([submit, reset]),
  gr.Row([result])
])

// 启动
gr.launch(ui, {
  title: "注册表单",
  theme: "light"
})
```

## 特性

- 文本输入与占位符
- 邮箱格式输入
- 年龄滑块（0-100）
- 提交与重置按钮
- 结果展示

## 个性化

### 增加更多字段

```typescript
const phone = gr.Textbox({
  label: "电话",
  placeholder: "请输入手机号"
})

const address = gr.Textbox({
  label: "地址",
  lines: 3,
  placeholder: "请输入联系地址"
})
```

### 简单校验

```typescript
submit.click(() => {
  if (!name.value?.trim()) {
    alert('姓名为必填项')
    return
  }
  if (!email.value?.includes('@')) {
    alert('邮箱格式不正确')
    return
  }
  return processForm(name.getValue(), email.getValue(), age.getValue())
}, { outputs: result })
```

## 下一步

- [计算器](/examples/calculator) - 数值输入与运算
- [图像生成器](/examples/image-generator) - 文件上传与图片预览
