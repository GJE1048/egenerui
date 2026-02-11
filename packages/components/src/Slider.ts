import { Component, ComponentConfig } from '@my-gradio/core'

export interface SliderConfig extends ComponentConfig {
  minimum?: number
  maximum?: number
  step?: number
  value?: number
  showLabel?: boolean
  interactive?: boolean
}

export class SliderComponent extends Component<number> {
  private _sliderElement: HTMLInputElement | null = null
  private _valueDisplay: HTMLElement | null = null
  
  constructor(config: SliderConfig = {}) {
    super('slider', {
      minimum: 0,
      maximum: 100,
      step: 1,
      ...config
    })
    
    this._value = config.value ?? this._config.minimum ?? 0
  }
  
  protected getDefaultValue(): number {
    return this._config.minimum || 0
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-slider-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.className = 'gr-slider-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Slider wrapper
    const sliderWrapper = document.createElement('div')
    sliderWrapper.className = 'gr-slider-wrapper'
    
    // Value display
    this._valueDisplay = document.createElement('span')
    this._valueDisplay.className = 'gr-slider-value'
    this._valueDisplay.textContent = String(this._value)
    sliderWrapper.appendChild(this._valueDisplay)
    
    // Range input
    this._sliderElement = document.createElement('input')
    this._sliderElement.type = 'range'
    this._sliderElement.className = 'gr-slider-input'
    this._sliderElement.min = String(this._config.minimum)
    this._sliderElement.max = String(this._config.maximum)
    this._sliderElement.step = String(this._config.step)
    this._sliderElement.value = String(this._value)
    
    // 事件监听
    this._sliderElement.addEventListener('input', (e) => {
      const newValue = Number((e.target as HTMLInputElement).value)
      this.setValue(newValue)
      this._valueDisplay!.textContent = String(newValue)
    })
    
    this._sliderElement.addEventListener('change', (e) => {
      const newValue = Number((e.target as HTMLInputElement).value)
      this.emitChange(newValue)
    })
    
    sliderWrapper.appendChild(this._sliderElement)
    container.appendChild(sliderWrapper)
    
    return container
  }
  
  protected updateElement(): void {
    if (this._sliderElement) {
      this._sliderElement.value = String(this._value)
    }
    if (this._valueDisplay) {
      this._valueDisplay.textContent = String(this._value)
    }
  }
  
  protected updateInteractivity(): void {
    if (this._sliderElement) {
      this._sliderElement.disabled = this._config.interactive === false
    }
  }
  
  setRange(min: number, max: number, step?: number): this {
    this._config.minimum = min
    this._config.maximum = max
    if (step !== undefined) {
      this._config.step = step
    }
    
    if (this._sliderElement) {
      this._sliderElement.min = String(min)
      this._sliderElement.max = String(max)
      if (step !== undefined) {
        this._sliderElement.step = String(step)
      }
    }
    
    return this
  }
}

export function Slider(config?: SliderConfig): SliderComponent {
  return new SliderComponent(config)
}

export type Slider = SliderComponent
