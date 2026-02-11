import { Component, ComponentConfig } from '@my-gradio/core'

export interface ColumnConfig extends ComponentConfig {
  variant?: 'default' | 'panel'
}

export class ColumnComponent extends Component<void> {
  constructor(components: Component<any>[] = [], config: ColumnConfig = {}) {
    super('column', config)
    components.forEach(comp => this.addChild(comp))
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-column'
    
    if (this._config.variant === 'panel') {
      container.classList.add('gr-column-panel')
    }
    
    // 渲染子组件
    this._children.forEach(child => {
      const childEl = child.render()
      const childWrapper = document.createElement('div')
      childWrapper.className = 'gr-column-item'
      childWrapper.appendChild(childEl)
      container.appendChild(childWrapper)
    })
    
    return container
  }
}

export function Column(components?: Component<any>[], config?: ColumnConfig): ColumnComponent {
  return new ColumnComponent(components, config)
}

export type Column = ColumnComponent
