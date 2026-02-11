# 服务端集成

使用 Client 连接后端并进行预测/上传，同时可配合 Router 进行路由管理。

## 预测接口

```ts
import { connect } from 'egenerui'

const api = connect('http://localhost:7860')

async function greet(name: string) {
  const res = await api.predict('greet', [name])
  return res.data[0]
}
```

在按钮事件中使用：

```ts
import gr from 'egenerui'

const name = gr.Textbox({ label: '姓名' })
const run = gr.Button('服务端问候').primary()
const out = gr.Textbox({ label: '结果', interactive: false })

run.click(greet, { inputs: name, outputs: out, apiName: 'greet' })
```

## 文件上传

```ts
const files = gr.File({ label: '上传文件', fileCount: 3 })

async function uploadFiles(f: any): Promise<string> {
  const list = Array.isArray(f) ? f.map(x => x.file) : [f.file]
  const urls = await api.upload(list)
  return `已上传：${urls.join(', ')}`
}
```

## 路由

```ts
import { getRouter } from 'egenerui'

const router = getRouter()
router.add('/detail/:id', ({ id }) => {
  console.log('当前 id:', id)
})

router.navigate('/detail/42')
```
