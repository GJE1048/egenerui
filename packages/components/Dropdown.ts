import { Component, ComponentConfig } from '../core/Component'

export interface DropdownConfig extends ComponentConfig {
  choices?: (string | { label: string; value: any })[]
  value?: any
  multiselect?: boolean
  allowCustomValue?: boolean
  showLabel?: boolean
}

export class DropdownComponent extends Component<any> {
  private _selectElement: HTMLSelectElement | null = null
  private _inputElement: HTMLInputElement | null = null
  private _containerElement: HTMLElement | null = null
  
  constructor(config: DropdownConfig = {}) {
    super('dropdown', config)
    this._value = config.value ?? (config.multiselect ? [] : '')
  }
  
  protected getDefaultValue(): any {
    return this._config.multiselect ? [] : ''
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-dropdown-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.className = 'gr-dropdown-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Dropdown wrapper
    this._containerElement = document.createElement('div')
    this._containerElement.className = 'gr-dropdown-wrapper'
    
    // Select element
    this._selectElement = document.createElement('select')
    this._selectElement.className = 'gr-dropdown-select'
    this._selectElement.multiple = this._config.multiselect || false
    
    // 添加选项
    const choices = this._config.choices || []
    choices.forEach(choice => {
      const option = document.createElement('option')
      if (typeof choice === 'string') {
        option.value = choice
        option.textContent = choice
      } else {
        option.value = choice.value
        option.textContent = choice.label
      }
      this._selectElement!.appendChild(option)
    })
    
    // 设置初始值
    if (this._config.multiselect && Array.isArray(this._value)) {
      this._selectElement.querySelectorAll('option').forEach(option => {
        option.selected = this._value.includes(option.value)
      })
    } else {
      this._selectElement.value = this._value
    }
    
    // 事件监听
    this._selectElement.addEventListener('change', () => {
      const newValue = this._config.multiselect 
        ? Array.from(this._selectElement!.selectedOptions).map(opt => opt.value)
        : this._selectElement!.value
      
      this.setValue(newValue)
      this.emitChange(newValue)
    })
    
    this._containerElement.appendChild(this._selectElement)
    
    // 允许自定义值
    if (this._config.allowCustomValue) {
      this._inputElement = document.createElement('input')
      this._inputElement.type = 'text'
      this._inputElement.className = 'gr-dropdown-custom-input'
      this._inputElement.placeholder = 'Or type custom value...'
      
      this._inputElement.addEventListener('input', (e) => {
        const value = (e.target as HTMLInputElement).value
        this.setValue(value)
      })
      
      this._containerElement.appendChild(this._inputElement)
    }
    
    container.appendChild(this._containerElement)
    return container
  }
  
  protected updateElement(): void {
    if (this._selectElement) {
      if (this._config.multiselect && Array.isArray(this._value)) {
        this._selectElement.querySelectorAll('option').forEach(option => {
          option.selected = this._value.includes(option.value)
        })
      } else {
        this._selectElement.value = this._value
      }
    }
    if (this._inputElement) {
      this._inputElement.value = this._value
    }
  }
  
  protected updateInteractivity(): void {
    if (this._selectElement) {
      this._selectElement.disabled = this._config.interactive === false
    }
    if (this._inputElement) {
      this._inputElement.disabled = this._config.interactive === false
    }
  }
  
  // 方法
  setChoices(choices: (string | { label: string; value: any })[]): this {
    this._config.choices = choices
    if (this._selectElement) {
      this._selectElement.innerHTML = ''
      choices.forEach(choice => {
        const option = document.createElement('option')
        if (typeof choice === 'string') {
          option.value = choice
          option.textContent = choice
        } else {
          option.value = choice.value
          option.textContent = choice.label
        }
        this._selectElement!.appendChild(option)
      })
    }
    return this
  }
  
  select(value: any): this {
    this.setValue(value)
    return this
  }
}

export type Dropdown = DropdownComponent
export function Dropdown(config?: DropdownConfig): DropdownComponent {
  return new DropdownComponent(config)
}
