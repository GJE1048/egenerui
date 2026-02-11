
# Installation

This guide will help you install MyGradio in your project.

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0 or pnpm >= 8.0.0

## Installation Methods

### Using npm

```bash
npm install my-gradio
```

### Using yarn

```bash
yarn add my-gradio
```

### Using pnpm

```bash
pnpm add my-gradio
```

## Importing MyGradio

### ES Modules

```typescript
import gr from 'my-gradio'
import 'my-gradio/style.css'
```

### CommonJS

```javascript
const gr = require('my-gradio')
require('my-gradio/style.css')
```

### CDN

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/my-gradio@latest/dist/style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module">
    import gr from 'https://cdn.jsdelivr.net/npm/my-gradio@latest/+esm'
    
    // Your code here
  </script>
</body>
</html>
```

## Next Steps

- [Quick Start](/guide/quick-start) - Build your first app
- [Project Structure](/guide/project-structure) - Understand the project layout
