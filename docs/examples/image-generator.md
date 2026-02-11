# 图像生成器示例

演示文件上传与图片预览，可扩展为风格化处理或接入后端生成。

## 完整示例

```typescript
import gr from 'my-gradio'

function generateImage(file: any, style: string): string {
  const data = Array.isArray(file) ? file[0]?.data : file?.data
  if (!data) return '请先上传图片'
  // 这里直接返回原图的 base64，真实项目可在此进行滤镜或调用后端
  return data
}

const file = gr.File({ label: '上传图片', fileTypes: ['image/*'] })
const style = gr.Dropdown({ label: '风格', choices: ['原图', '灰度', '反色'], value: '原图' })

const gen = gr.Button('生成').primary()
const preview = gr.Image({ label: '预览' })

gen.click(generateImage, { inputs: [file, style], outputs: preview, apiName: 'generate_image' })

const ui = gr.Column([
  gr.Markdown('# 🖼️ 图像生成器'),
  gr.Row([file]),
  gr.Row([style]),
  gr.Row([gen]),
  gr.Row([preview])
])

gr.launch(ui, { title: '图像生成器', theme: 'light' })
```

## 提示
- `File` 组件会将图片读取为 base64 并支持预览
- 可以将生成逻辑替换为调用后端：使用 `connect()` 客户端调用推理接口
