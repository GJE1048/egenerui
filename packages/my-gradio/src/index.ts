
export { Component } from '../../core/src/Component'
export { Renderer } from '../../core/src/Renderer'
export { EventSystem } from '../../core/src/EventSystem'
export { DataBinding } from '../../core/src/DataBinding'

export { Textbox, type TextboxConfig } from '../../components/src/Textbox'
export { Button, type ButtonConfig } from '../../components/src/Button'
export { Slider, type SliderConfig } from '../../components/src/Slider'
export { Checkbox, type CheckboxConfig } from '../../components/src/Checkbox'
export { Image, type ImageConfig } from '../../components/src/Image'
export { Dropdown, type DropdownConfig } from '../../components/src/Dropdown'
export { Radio, type RadioConfig } from '../../components/src/Radio'
export { File, type FileConfig } from '../../components/src/File'
export { Markdown, type MarkdownConfig } from '../../components/src/Markdown'
export { ThemeToggle } from '../../components/src/ThemeToggle'

export { Row, type RowConfig } from '../../layout/src/Row'
export { Column, type ColumnConfig } from '../../layout/src/Column'

export * from '../../api/src/Client'
export * from '../../api/src/Router'
export * from '../../state/src/StateManager'
export * from '../../state/src/decorators'
export * from '../../theme/src/ThemeManager'

import { Renderer } from '../../core/src/Renderer'
import { Component } from '../../core/src/Component'
import { Textbox } from '../../components/src/Textbox'
import { Button } from '../../components/src/Button'
import { Slider } from '../../components/src/Slider'
import { Checkbox } from '../../components/src/Checkbox'
import { Image } from '../../components/src/Image'
import { Dropdown } from '../../components/src/Dropdown'
import { Radio } from '../../components/src/Radio'
import { File } from '../../components/src/File'
import { Markdown } from '../../components/src/Markdown'
import { ThemeToggle } from '../../components/src/ThemeToggle'
import { Row } from '../../layout/src/Row'
import { Column } from '../../layout/src/Column'
import { connect } from '../../api/src/Client'
import { getRouter } from '../../api/src/Router'
import { getStateManager } from '../../state/src/StateManager'
import { getThemeManager } from '../../theme/src/ThemeManager'

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
