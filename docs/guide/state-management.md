# 状态管理

StateManager 提供全局键值存储、订阅与持久化，适合跨组件共享数据。

## 基本用法

```ts
import { getStateManager } from 'my-gradio'
const state = getStateManager()

state.set('theme', 'dark')          // 设置状态
const theme = state.get('theme')    // 读取状态
```

## 订阅与取消订阅

```ts
const unsub = state.subscribe('theme', (v) => {
  console.log('主题切换为：', v)
})

// 取消订阅
unsub()
```

## 持久化

```ts
state.set('lang', 'zh-CN', { persist: true, storage: 'local' })
state.set('page', 'home', { persist: true, storage: 'url' })
```

持久化支持：
- local：localStorage
- session：sessionStorage
- url：写入 URL 查询参数并替换历史

更多细节请参阅 [状态 API](/api/state)。
