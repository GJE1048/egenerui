# File

文件上传与管理，支持拖拽、预览、下载与删除。

**引入方式**

- 按需引入

```ts
import { File } from 'egenerui'
```

- 全量引入

```ts
import gr from 'egenerui'
const { File } = gr
```

**基础用法**

```ts
const uploader = File({
  label: '上传文件',
  fileTypes: ['.png', '.jpg', '.pdf'],
  fileCount: 3,
  showDownloadButton: true
})
```

**属性 Props**

- fileTypes: 允许的文件类型（['.pdf', '.docx']）
- fileCount: 最多上传数量
- showDownloadButton: 是否显示下载按钮
- type: 返回值类型（'file' | 'binary' | 'bytes'）
- showLabel: 是否展示组件 label

**事件与值**

- change((val) => void): 值变化时触发
- 值类型：当 fileCount=1 时为单个 FileData，否则为数组；为空返回 null

```ts
uploader.change((val) => {
  if (!val) return
  const files = Array.isArray(val) ? val : [val]
  console.log('选择文件：', files.map(f => `${f.name}(${f.size}B)`))
})
```

**方法 Methods**

- clear(): 清空所有文件
- getFiles(): 返回归一化后的文件数组

```ts
// 清空
uploader.clear()

// 获取文件
const files = uploader.getFiles()
```

**图片预览与下载**

- 图片支持预览弹窗
- 当 showDownloadButton 为 true 时显示下载按钮

**代码参考**

- 组件实现：[File.ts](file:///Users/gje/Desktop/private/202602/eco-html/my-gradio/packages/components/src/File.ts)
