import { Component, ComponentConfig } from '../core/Component'

export interface RowConfig extends ComponentConfig {
  equalHeight?: boolean
  variant?: 'default' | 'panel'
}

export class RowComponent extends Component<void> {
  constructor(components: Component<any>[] = [], config: RowConfig = {}) {
    super('row', config)
    components.forEach(comp => this.addChild(comp))
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-row'
    
    if (this._config.variant === 'panel') {
      container.classList.add('gr-row-panel')
    }
    
    if (this._config.equalHeight) {
      container.style.alignItems = 'stretch'
    }
    
    // 渲染子组件
    this._children.forEach(child => {
      const childEl = child.render()
      const childWrapper = document.createElement('div')
      childWrapper.className = 'gr-row-item'
      childWrapper.style.flex = `1 ${this._config.scale || 1}`
      
      if (this._config.minWidth) {
        childWrapper.style.minWidth = `${this._config.minWidth}px`
      }
      
      childWrapper.appendChild(childEl)
      container.appendChild(childWrapper)
    })
    
    return container
  }
}

export function Row(components?: Component<any>[], config?: RowConfig): RowComponent {
  return new RowComponent(components, config)
}

export type Row = RowComponent
