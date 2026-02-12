# 安装

本文将帮助你在项目中安装并使用 Egenerui。

## 环境要求

- Node.js >= 18.0.0
- 包管理器：npm >= 9.0.0 或 pnpm >= 8.0.0（推荐）

## 安装方式

### 使用 npm

```bash
npm install egenerui
```

### 使用 yarn

```bash
yarn add egenerui
```

### 使用 pnpm

```bash
pnpm add egenerui
```

## 引入 Egenerui

### ES Modules

```typescript
import gr from 'egenerui'
import 'egenerui/style.css'

// 按需导入（命名导入），仅引入使用到的组件与 API
import { Button, Textbox } from 'egenerui'
```

### CommonJS

```javascript
const gr = require('egenerui')
require('egenerui/style.css')

// CommonJS 环境按需导入（需转译支持）
const { Button, Textbox } = require('egenerui')
```

### CDN

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/egenerui@latest/dist/style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module">
    import gr from 'https://cdn.jsdelivr.net/npm/egenerui@latest/+esm'
    // 在此编写代码
  </script>
</body>
</html>
```

## 下一步

- [快速上手](/guide/quick-start) - 构建你的第一个应用
- [项目结构](/guide/project-structure) - 了解项目组织与约定
