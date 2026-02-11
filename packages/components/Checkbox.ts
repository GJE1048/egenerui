import { Component, ComponentConfig } from '../core/Component'

export interface CheckboxConfig extends ComponentConfig {
  value?: boolean
  label?: string
}

export class CheckboxComponent extends Component<boolean> {
  private _checkboxElement: HTMLInputElement | null = null
  
  constructor(config: CheckboxConfig = {}) {
    super('checkbox', config)
    this._value = config.value ?? false
  }
  
  protected getDefaultValue(): boolean {
    return false
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-checkbox-container'
    
    // Checkbox wrapper
    const checkboxWrapper = document.createElement('label')
    checkboxWrapper.className = 'gr-checkbox-wrapper'
    
    // Input
    this._checkboxElement = document.createElement('input')
    this._checkboxElement.type = 'checkbox'
    this._checkboxElement.className = 'gr-checkbox-input'
    this._checkboxElement.checked = this._value
    
    // 事件监听
    this._checkboxElement.addEventListener('change', (e) => {
      const newValue = (e.target as HTMLInputElement).checked
      this.setValue(newValue)
      this.emitChange(newValue)
    })
    
    checkboxWrapper.appendChild(this._checkboxElement)
    
    // Label
    if (this._config.label) {
      const label = document.createElement('span')
      label.className = 'gr-checkbox-label'
      label.textContent = this._config.label
      checkboxWrapper.appendChild(label)
    }
    
    container.appendChild(checkboxWrapper)
    return container
  }
  
  protected updateElement(): void {
    if (this._checkboxElement) {
      this._checkboxElement.checked = this._value
    }
  }
  
  protected updateInteractivity(): void {
    if (this._checkboxElement) {
      this._checkboxElement.disabled = this._config.interactive === false
    }
  }
  
  toggle(): this {
    this.setValue(!this._value)
    return this
  }
}

export function Checkbox(config?: CheckboxConfig): CheckboxComponent {
  return new CheckboxComponent(config)
}

export type Checkbox = CheckboxComponent
