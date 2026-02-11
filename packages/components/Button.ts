import { Component, ComponentConfig } from '../core/Component'
import { EventSystem } from '../core/EventSystem'

export interface ButtonConfig extends ComponentConfig {
  variant?: 'primary' | 'secondary' | 'stop'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  link?: string
}

export class ButtonComponent extends Component<string> {
  private _buttonElement: HTMLButtonElement | null = null
  private _clickHandler: ((...args: any[]) => any) | null = null
  
  constructor(label: string, config: ButtonConfig = {}) {
    super('button', { ...config, value: label })
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-button-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.className = 'gr-button-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Button
    this._buttonElement = document.createElement('button')
    this._buttonElement.type = 'button'
    this._buttonElement.className = `gr-button gr-button-${this._config.variant || 'secondary'}`
    this._buttonElement.textContent = this._value
    
    if (this._config.size) {
      this._buttonElement.classList.add(`gr-button-${this._config.size}`)
    }
    
    if (this._config.icon) {
      const icon = document.createElement('span')
      icon.className = 'gr-button-icon'
      icon.innerHTML = this._config.icon
      this._buttonElement.insertBefore(icon, this._buttonElement.firstChild)
    }
    
    // 点击事件
    this._buttonElement.addEventListener('click', async () => {
      this.emitClick(this._value)
      
      if (this._clickHandler) {
        await this.handleClick()
      }
    })
    
    container.appendChild(this._buttonElement)
    return container
  }
  
  protected updateElement(): void {
    if (this._buttonElement) {
      this._buttonElement.textContent = this._value
    }
  }
  
  protected updateInteractivity(): void {
    if (this._buttonElement) {
      this._buttonElement.disabled = this._config.interactive === false
    }
  }
  
  // ===== 核心方法：click =====
  click(
    fn: (...args: any[]) => any | Promise<any>,
    options?: {
      inputs?: Component<any> | Component<any>[]
      outputs?: Component<any> | Component<any>[]
      preprocess?: Function
      postprocess?: Function
      apiName?: string
      queue?: boolean
    }
  ): this {
    this._clickHandler = fn
    
    if (options?.inputs) {
      this._inputs = Array.isArray(options.inputs) ? options.inputs : [options.inputs]
    }
    
    if (options?.outputs) {
      this._outputs = Array.isArray(options.outputs) ? options.outputs : [options.outputs]
    }
    
    // 注册到事件系统
    EventSystem.getInstance().register(this._id, 'click', {
      fn,
      inputs: this._inputs,
      outputs: this._outputs,
      preprocess: options?.preprocess,
      postprocess: options?.postprocess,
      apiName: options?.apiName,
      queue: options?.queue
    })
    
    return this
  }
  
  private async handleClick(): Promise<void> {
    if (!this._clickHandler) return
    
    // 显示加载状态
    const wasDisabled = this._config.interactive === false
    const originalValue = this._value
    this.disable().setValue(this._value + '...')
    
    try {
      // 触发事件系统
      await EventSystem.getInstance().trigger(this._id, 'click', {})
    } catch (error) {
      console.error('Button click error:', error)
      // 恢复按钮
      this.enable().setValue(originalValue)
      throw error
    } finally {
      // 恢复按钮状态
      if (!wasDisabled) {
        this.enable().setValue(originalValue)
      }
    }
  }
  
  // 快捷方法
  primary(): this {
    this._config.variant = 'primary'
    this.updateElement()
    return this
  }
  
  secondary(): this {
    this._config.variant = 'secondary'
    this.updateElement()
    return this
  }
  
  stop(): this {
    this._config.variant = 'stop'
    this.updateElement()
    return this
  }
  
  small(): this {
    this._config.size = 'sm'
    this.updateElement()
    return this
  }
  
  large(): this {
    this._config.size = 'lg'
    this.updateElement()
    return this
  }
}

// 工厂函数
export function Button(label: string, config?: ButtonConfig): ButtonComponent {
  return new ButtonComponent(label, config)
}

export type Button = ButtonComponent
