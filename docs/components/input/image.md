# Image

图片展示与占位。支持设置 src、alt、宽高。

**引入方式**

- 按需引入

```ts
import { Image } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { Image } = gr
```

**基础用法**

```ts
const avatar = Image({
  label: '头像',
  src: 'https://example.com/u/1.png',
  alt: '用户头像',
  width: 120,
  height: 120
})
```

也可直接传字符串作为 src：

```ts
const banner = Image('https://example.com/banner.jpg')
```

**属性 Props**

- src: 图片地址
- alt: 替代文本
- width: 宽度（number 像素或 string，如 '50%'）
- height: 高度（number 像素或 string，如 'auto'）
- showLabel: 是否展示组件 label

**更新图片**

```ts
// 通用：更新值即更新图片
avatar.setValue('https://example.com/new.png')
```

当 src 为空时，图片自动隐藏。

**代码参考**

- 组件实现：[Image.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/components/src/Image.ts)
