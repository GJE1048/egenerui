import { Component } from './Component'

export interface RenderOptions {
  target?: string | HTMLElement
  title?: string
  theme?: string
  css?: string
  head?: string
}

export class Renderer {
  private static instance: Renderer
  private rootElement: HTMLElement | null = null
  private components: Map<string, Component<any>> = new Map()
  
  private constructor() {}
  
  static getInstance(): Renderer {
    if (!Renderer.instance) {
      Renderer.instance = new Renderer()
    }
    return Renderer.instance
  }
  
  launch(ui: Component<any> | Component<any>[], options: RenderOptions = {}): void {
    // 创建根元素
    this.rootElement = this.createRootElement(options)
    
    // 渲染 UI
    if (Array.isArray(ui)) {
      ui.forEach(component => this.renderComponent(component))
    } else {
      this.renderComponent(ui)
    }
    
    // 挂载到页面
    this.mountRootElement(options.target)
    
    // 触发启动事件
    window.dispatchEvent(new CustomEvent('gradio:launched'))
  }
  
  private createRootElement(options: RenderOptions): HTMLElement {
    const root = document.createElement('div')
    root.id = 'gradio-root'
    root.className = 'gradio-app'
    
    if (options.theme) {
      root.setAttribute('data-theme', options.theme)
    }
    
    // 添加标题
    if (options.title) {
      const titleEl = document.createElement('h1')
      titleEl.className = 'gradio-title'
      titleEl.textContent = options.title
      root.appendChild(titleEl)
    }
    
    // 添加容器
    const container = document.createElement('div')
    container.className = 'gradio-container'
    root.appendChild(container)
    
    this.rootElement = container
    
    return root
  }
  
  private renderComponent(component: Component<any>): void {
    const element = component.render()
    this.rootElement?.appendChild(element)
    this.components.set(component.id, component)
  }
  
  private mountRootElement(target?: string | HTMLElement): void {
    let container: HTMLElement | null = null
    
    if (typeof target === 'string') {
      container = document.querySelector(target)
    } else if (target instanceof HTMLElement) {
      container = target
    } else {
      // 默认挂载到 body
      container = document.body.querySelector('#gradio-root') || document.body
    }
    
    if (!container) {
      console.warn('Target container not found, creating new one')
      container = document.createElement('div')
      document.body.appendChild(container)
    }
    
    // 如果容器已经有内容，清空
    if (container.id !== 'gradio-root') {
      container.innerHTML = ''
    }
    
    container.appendChild(this.rootElement!)
  }
  
  getComponent(id: string): Component<any> | undefined {
    return this.components.get(id)
  }
  
  close(): void {
    if (this.rootElement?.parentElement) {
      this.rootElement.parentElement.removeChild(this.rootElement)
    }
    this.components.clear()
  }
}
