
# 复选框 Checkbox

复选框组件用于切换单个布尔值状态。

## 引入方式

### 全量引入
```typescript
import gr from 'egenerui'
```

### 按需引入
```typescript
import { Checkbox } from 'egenerui'
```

## 使用示例

### 基础复选框
```typescript
// 方式一：默认对象
const checkbox = gr.Checkbox({
  label: "我已阅读并同意用户协议",
  value: false
})

// 方式二：按需导入
const checkbox2 = Checkbox({
  label: "订阅新闻邮件",
  value: true
})
```

## 属性 (Props)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| `label` | `string` | - | 组件标签文本 |
| `value` | `boolean` | `false` | 是否选中 |
| `interactive` | `boolean` | `true` | 是否可交互 |

## 方法 (Methods)

| 方法名 | 返回类型 | 说明 |
|------|------|-------------|
| `toggle()` | `this` | 切换选中状态 |

## 事件 (Events)

| 事件名 | 说明 |
|------|-------------|
| `change` | 当选中状态发生改变时触发 |
