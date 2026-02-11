# 客户端 API

Client 提供与后端交互的能力，包括预测与文件上传；同时 Router 提供最简路由管理。

## Client

- 构造：new Client({ root, headers? })
- 连接：connect(root, options?) 返回 Client 实例
- 预测：predict(fnIndex | fnName, data[], eventData?) => Promise<{ data: any[] }>
- 上传：upload(files: File[]) => Promise<string[]>

示例：

```ts
import { connect } from 'egenerui'

const api = connect('http://localhost:7860')

const res = await api.predict(0, ['hello'])
console.log(res.data)
```

## Router

- add(path, handler) 注册路由
- navigate(path) 导航
- getRouter() 获取全局 Router

```ts
import { getRouter } from 'egenerui'

const router = getRouter()
router.add('/detail/:id', ({ id }) => {
  console.log('当前 id:', id)
})

router.navigate('/detail/42')
```
