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
// ... 其他组件

// 布局
export { Row, type RowConfig } from './layout/Row'
export { Column, type ColumnConfig } from './layout/Column'

import { Renderer } from './core/Renderer'
import { Component } from './core/Component'
import { Textbox } from './components/Textbox'
import { Button } from './components/Button'
import { Slider } from './components/Slider'
import { Checkbox } from './components/Checkbox'
import { Image } from './components/Image'
import { Row } from './layout/Row'
import { Column } from './layout/Column'

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
  Row,
  Column,
  launch
}

export default gr
export { gr }
