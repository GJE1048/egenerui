import { Component, ComponentConfig } from '@my-gradio/core'

export interface ImageConfig extends ComponentConfig {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
}

export class ImageComponent extends Component<string> {
  private _imgElement: HTMLImageElement | null = null
  
  constructor(config: ImageConfig | string = {}) {
    const cfg = typeof config === 'string' ? { src: config } : config
    super('image', cfg)
    this._value = (this._config as ImageConfig).src || ''
  }
  
  protected getDefaultValue(): string {
    return ''
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-image-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.className = 'gr-image-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Image
    this._imgElement = document.createElement('img')
    this._imgElement.className = 'gr-image'
    if (this._value) {
      this._imgElement.src = this._value
    }
    
    if (this._config.alt) {
      this._imgElement.alt = this._config.alt
    }
    
    if (this._config.width) {
      this._imgElement.style.width = typeof this._config.width === 'number' ? `${this._config.width}px` : this._config.width
    }
    
    if (this._config.height) {
      this._imgElement.style.height = typeof this._config.height === 'number' ? `${this._config.height}px` : this._config.height
    }
    
    container.appendChild(this._imgElement)
    return container
  }
  
  protected updateElement(): void {
    if (this._imgElement) {
      if (this._value) {
        this._imgElement.src = this._value
        this._imgElement.style.display = ''
      } else {
        this._imgElement.style.display = 'none'
      }
    }
  }
}

export function Image(config?: ImageConfig | string): ImageComponent {
  return new ImageComponent(config)
}

export type Image = ImageComponent
