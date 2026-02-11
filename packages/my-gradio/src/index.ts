// 核心系统
export * from '@my-gradio/core'

// 组件
export * from '@my-gradio/components'

// 布局
export * from '@my-gradio/layout'

// API & State & Theme
export * from '@my-gradio/api'
export * from '@my-gradio/state'
export * from '@my-gradio/theme'

import { Renderer, Component } from '@my-gradio/core'
import {
  Textbox,
  Button,
  Slider,
  Checkbox,
  Image,
  Dropdown,
  Radio,
  File,
  Markdown,
  ThemeToggle
} from '@my-gradio/components'
import { Row, Column } from '@my-gradio/layout'
import { connect, getRouter } from '@my-gradio/api'
import { getStateManager } from '@my-gradio/state'
import { getThemeManager } from '@my-gradio/theme'

// 全局 API
export function launch(
  ui: Component<any> | Component<any>[],
  options?: Parameters<typeof Renderer.prototype.launch>[1]
): void {
  Renderer.getInstance().launch(ui, options)
}

// 创建快捷方式
const gr = {
  Textbox,
  Button,
  Slider,
  Checkbox,
  Image,
  Dropdown,
  Radio,
  File,
  Markdown,
  ThemeToggle,
  Row,
  Column,
  launch,
  connect,
  getRouter,
  getStateManager,
  getThemeManager
}

export default gr
export { gr }
