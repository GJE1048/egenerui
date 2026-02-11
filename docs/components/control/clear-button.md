# ClearButton

清空按钮是一种用法模式：使用 Button 配合各组件的清理方法，实现一键清空。

**适用场景**

- 清空输入值：Textbox.clear()
- 重置选择：Dropdown.setValue([]) 或 select('')
- 移除上传：File.clear()
- 取消勾选：Radio.setValue([]) 或 check(null)

**示例：一键清空表单**

```ts
import { Textbox, Dropdown, Radio, File, Button } from 'egenerui'

const name = Textbox({ label: '姓名' })
const role = Dropdown({ label: '角色', choices: ['管理员', '访客'] })
const hobby = Radio({ label: '兴趣', type: 'checkbox', choices: ['运动', '阅读'] })
const uploads = File({ label: '附件', fileCount: 3 })

const clearAll = Button('清空', { variant: 'secondary', icon: '🧹' })

clearAll.click(() => {
  name.clear()
  role.setValue('')
  hobby.setValue([])
  uploads.clear()
})
```

**最佳实践**

- 对不同组件使用合适的“清空方式”，保持语义清晰
- 提供视觉提示（如图标）以表明是“清理”操作
- 如有危险操作（删除数据），建议二次确认
