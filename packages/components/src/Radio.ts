import { Component, ComponentConfig } from '@my-gradio/core'

export interface RadioConfig extends ComponentConfig {
  choices?: (string | { label: string; value: any })[]
  value?: any
  type?: 'radio' | 'checkbox' // radio 或 checkbox 组
  showLabel?: boolean
}

export class RadioComponent extends Component<any> {
  private _groupElement: HTMLElement | null = null
  private _radioInputs: HTMLInputElement[] = [] // Renamed from _inputs to avoid conflict
  
  constructor(config: RadioConfig = {}) {
    super('radio', config)
    this._value = config.value ?? ''
  }
  
  protected getDefaultValue(): any {
    return ''
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-radio-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.className = 'gr-radio-group-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Radio group
    this._groupElement = document.createElement('div')
    this._groupElement.className = `gr-radio-group gr-radio-group-${this._config.type || 'radio'}`
    
    // 创建选项
    const config = this._config as RadioConfig
    const choices = config.choices || []
    const isCheckbox = config.type === 'checkbox'
    const currentValue = isCheckbox && !Array.isArray(this._value) ? [] : this._value
    
    choices.forEach((choice: string | { label: string; value: any }, index: number) => {
      const choiceValue = typeof choice === 'string' ? choice : choice.value
      const choiceLabel = typeof choice === 'string' ? choice : choice.label
      
      const wrapper = document.createElement('label')
      wrapper.className = 'gr-radio-item'
      
      const input = document.createElement('input')
      input.type = isCheckbox ? 'checkbox' : 'radio'
      input.name = isCheckbox ? '' : `${this._id}-group`
      input.value = choiceValue
      input.className = 'gr-radio-input'
      
      // 设置选中状态
      if (isCheckbox && Array.isArray(currentValue)) {
        input.checked = currentValue.includes(choiceValue)
      } else {
        input.checked = choiceValue === currentValue
      }
      
      // 事件监听
      input.addEventListener('change', () => {
        let newValue: any
        
        if (isCheckbox) {
          const checkedValues = this._radioInputs
            .filter(input => input.checked)
            .map(input => input.value)
          newValue = checkedValues
        } else {
          newValue = choiceValue
        }
        
        this.setValue(newValue)
        this.emitChange(newValue)
      })
      
      const text = document.createElement('span')
      text.className = 'gr-radio-text'
      text.textContent = choiceLabel
      
      wrapper.appendChild(input)
      wrapper.appendChild(text)
      this._groupElement!.appendChild(wrapper)
      this._radioInputs.push(input)
    })
    
    container.appendChild(this._groupElement)
    return container
  }
  
  protected updateElement(): void {
    const isCheckbox = this._config.type === 'checkbox'
    
    this._radioInputs.forEach(input => {
      if (isCheckbox && Array.isArray(this._value)) {
        input.checked = this._value.includes(input.value)
      } else {
        input.checked = input.value === this._value
      }
    })
  }
  
  protected updateInteractivity(): void {
    this._radioInputs.forEach(input => {
      input.disabled = this._config.interactive === false
    })
  }
  
  setChoices(choices: (string | { label: string; value: any })[]): this {
    this._config.choices = choices
    if (this._groupElement) {
      this._groupElement.innerHTML = ''
      this._radioInputs = []
      this.render() // 重新渲染
    }
    return this
  }
  
  check(value: any): this {
    this.setValue(value)
    return this
  }
}

export type Radio = RadioComponent
export function Radio(config?: RadioConfig): RadioComponent {
  return new RadioComponent(config)
}
