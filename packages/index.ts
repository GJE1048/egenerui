
// 核心系统
export { Component } from './core/Component'
export { Renderer } from './core/Renderer'
export { EventSystem } from './core/EventSystem'
export { DataBinding } from './core/DataBinding'

// 组件
export { Textbox, type TextboxConfig } from './components/Textbox'
export { Button, type ButtonConfig } from './components/Button'
export { Slider, type SliderConfig } from './components/Slider'
export { Checkbox, type CheckboxConfig } from './components/Checkbox'
export { Image, type ImageConfig } from './components/Image'
export { Dropdown, type DropdownConfig } from './components/Dropdown'
export { Radio, type RadioConfig } from './components/Radio'
export { File, type FileConfig } from './components/File'
export { Markdown, type MarkdownConfig } from './components/Markdown'
export { ThemeToggle } from './components/ThemeToggle'

// 布局
export { Row, type RowConfig } from './layout/Row'
export { Column, type ColumnConfig } from './layout/Column'

// API & State & Theme
export * from './api/Client'
export * from './api/Router'
export * from './state/StateManager'
export * from './state/decorators'
export * from './theme/ThemeManager'

import { Renderer } from './core/Renderer'
import { Component } from './core/Component'
import { Textbox } from './components/Textbox'
import { Button } from './components/Button'
import { Slider } from './components/Slider'
import { Checkbox } from './components/Checkbox'
import { Image } from './components/Image'
import { Dropdown } from './components/Dropdown'
import { Radio } from './components/Radio'
import { File } from './components/File'
import { Markdown } from './components/Markdown'
import { ThemeToggle } from './components/ThemeToggle'
import { Row } from './layout/Row'
import { Column } from './layout/Column'
import { connect } from './api/Client'
import { getRouter } from './api/Router'
import { getStateManager } from './state/StateManager'
import { getThemeManager } from './theme/ThemeManager'

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
