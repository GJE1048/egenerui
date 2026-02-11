# 聊天机器人示例

使用 Markdown 展示对话记录，并通过按钮发送消息。示例内置一个简单的规则回复，可替换为后端对话接口。

## 完整示例

```typescript
import gr from 'my-gradio'

const chat = gr.Markdown({ value: '### 会话\n\n' })
const input = gr.Textbox({ label: '消息', placeholder: '请输入...' })
const send = gr.Button('发送').primary()

let history: { role: '用户' | '助手'; content: string }[] = []

function reply(msg: string): string {
  const user = msg?.trim()
  if (!user) return '请输入消息'
  history.push({ role: '用户', content: user })
  
  // 简单规则：包含“你好”则问候，否则回显长度
  const bot = user.includes('你好') ? '你好！很高兴见到你～' : `我收到了 ${user.length} 个字符`
  history.push({ role: '助手', content: bot })
  
  return history.map(m => `**${m.role}**：${m.content}`).join('\n\n')
}

send.click(reply, { inputs: input, outputs: chat, apiName: 'chat' })

const ui = gr.Column([
  gr.Markdown('# 💬 聊天机器人'),
  gr.Row([chat]),
  gr.Row([input]),
  gr.Row([send])
])

gr.launch(ui, { title: '聊天机器人', theme: 'light' })
```

## 扩展建议
- 将 `reply` 函数替换为后端接口调用：使用 `connect()` 客户端并将回复写入 Markdown
- 增加“清空对话”按钮，清理 `history` 并重置 Markdown
