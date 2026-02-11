
# 主题切换 ThemeToggle

主题切换组件是一个预设的按钮，用于在浅色（Light）和深色（Dark）模式之间切换。

## 引入方式

### 全量引入
```typescript
import gr from 'my-gradio'
```

### 按需引入
```typescript
import { ThemeToggle } from 'my-gradio/components/ThemeToggle'
```

## 使用示例

### 基础用法
```typescript
const toggle = gr.ThemeToggle()
```

## 说明

- 该组件会自动检测当前系统的主题偏好。
- 点击按钮时，它会调用 `ThemeManager` 切换全局主题，并持久化存储用户的选择。
- 按钮图标（☀️/🌙）会自动根据当前主题状态更新。
