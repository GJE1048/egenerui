import { Component, ComponentConfig } from '@my-gradio/core'

export interface TextboxConfig extends ComponentConfig {
  placeholder?: string
  maxLines?: number
  lines?: number
  showLabel?: boolean
  type?: 'text' | 'password' | 'email' | 'number'
  autofocus?: boolean
}

export class TextboxComponent extends Component<string> {
  private _inputElement: HTMLInputElement | HTMLTextAreaElement | null = null
  
  constructor(config: string | TextboxConfig = {}) {
    const cfg = typeof config === 'string' ? { label: config } : config
    super('textbox', cfg)
    
    // 绑定输入事件
    this.change(value => {
      if (this._inputElement) {
        this._inputElement.value = value
      }
    })
  }
  
  protected getDefaultValue(): string {
    return ''
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-textbox-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.htmlFor = `${this._id}-input`
      label.className = 'gr-textbox-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Input
    const inputContainer = document.createElement('div')
    inputContainer.className = 'gr-textbox-input-container'
    
    if ((this._config.lines || 0) > 1 || (this._config.maxLines || 0) > 1) {
      // 多行文本
      this._inputElement = document.createElement('textarea')
      this._inputElement.rows = this._config.lines || 3
      if (this._config.maxLines) {
        this._inputElement.setAttribute('maxlength', String(this._config.maxLines * 100)) // 粗略估计
      }
    } else {
      // 单行文本
      this._inputElement = document.createElement('input')
      this._inputElement.type = this._config.type || 'text'
    }
    
    this._inputElement.id = `${this._id}-input`
    this._inputElement.className = 'gr-textbox-input'
    this._inputElement.placeholder = this._config.placeholder || ''
    this._inputElement.value = this._value
    
    if (this._config.autofocus) {
      this._inputElement.autofocus = true
    }
    
    // 事件监听
    this._inputElement.addEventListener('input', (e) => {
      const newValue = (e.target as HTMLInputElement).value
      this.setValue(newValue)
    })
    
    this._inputElement.addEventListener('change', (e) => {
      const newValue = (e.target as HTMLInputElement).value
      this.emitChange(newValue)
    })
    
    inputContainer.appendChild(this._inputElement)
    container.appendChild(inputContainer)
    
    return container
  }
  
  protected updateElement(): void {
    if (this._inputElement) {
      this._inputElement.value = this._value || ''
    }
  }
  
  protected updateInteractivity(): void {
    if (this._inputElement) {
      this._inputElement.disabled = this._config.interactive === false
    }
  }
  
  focus(): this {
    this._inputElement?.focus()
    return this
  }
  
  select(): this {
    this._inputElement?.select()
    return this
  }
  
  clear(): this {
    this.setValue('')
    return this
  }
  
  // 链式调用增强
  onInput(handler: (value: string) => void): this {
    this.change(handler)
    return this
  }
}

// 工厂函数
export function Textbox(config?: string | TextboxConfig): TextboxComponent {
  return new TextboxComponent(config)
}

export type Textbox = TextboxComponent
