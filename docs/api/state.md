# 状态 API

StateManager 提供轻量的键值状态存储、订阅与持久化能力。

## StateManager

- set(key, value, options?) 设置状态并通知订阅者
- get(key, defaultValue?) 读取状态
- subscribe(key, listener) 订阅指定键的变化，返回取消订阅函数
- getStateManager() 获取全局状态管理器单例

持久化选项：

```ts
type StateOptions = {
  persist?: boolean
  key?: string
  storage?: 'local' | 'session' | 'url'
}
```

示例：

```ts
import { getStateManager } from 'my-gradio'
const state = getStateManager()

state.set('theme', 'dark', { persist: true, storage: 'local' })

const unsubs = state.subscribe('theme', (v) => {
  console.log('主题切换为：', v)
})

// 取消订阅
unsubs()
```
