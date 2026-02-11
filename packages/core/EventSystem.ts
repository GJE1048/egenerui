import { Component } from './Component'

export type EventHandler<T = any> = (data: T) => void | Promise<void>

export interface EventBinding {
  fn: Function
  inputs: Component<any>[]
  outputs: Component<any>[]
  preprocess?: Function
  postprocess?: Function
  apiName?: string
  queue?: boolean
}

export class EventSystem {
  private static instance: EventSystem
  private events: Map<string, EventBinding[]> = new Map()
  
  private constructor() {}
  
  static getInstance(): EventSystem {
    if (!EventSystem.instance) {
      EventSystem.instance = new EventSystem()
    }
    return EventSystem.instance
  }
  
  register(componentId: string, event: string, binding: EventBinding): void {
    const key = `${componentId}:${event}`
    if (!this.events.has(key)) {
      this.events.set(key, [])
    }
    this.events.get(key)!.push(binding)
    
    // 注册 API 端点（可选）
    if (binding.apiName) {
      this.registerAPIEndpoint(binding.apiName, binding)
    }
  }
  
  async trigger(componentId: string, event: string, eventData: any): Promise<void> {
    const key = `${componentId}:${event}`
    const bindings = this.events.get(key)
    
    if (!bindings) return
    
    for (const binding of bindings) {
      try {
        await this.executeBinding(binding, eventData)
      } catch (error) {
        console.error(`Error executing event binding:`, error)
      }
    }
  }
  
  private async executeBinding(binding: EventBinding, eventData: any): Promise<void> {
    const { fn, inputs, outputs, preprocess, postprocess } = binding
    
    // 1. 收集输入值
    const inputValues = inputs.map(input => input.getValue())
    
    // 2. 预处理
    let processedInputs = inputValues
    if (preprocess) {
      processedInputs = await preprocess(processedInputs)
    }
    
    // 3. 执行函数
    let result = await fn(...processedInputs)
    
    // 4. 后处理
    if (postprocess) {
      result = await postprocess(result)
    }
    
    // 5. 更新输出
    if (Array.isArray(result)) {
      outputs.forEach((output, index) => {
        if (result[index] !== undefined) {
          output.setValue(result[index])
        }
      })
    } else if (outputs.length > 0) {
      outputs[0].setValue(result)
    }
  }
  
  private registerAPIEndpoint(apiName: string, binding: EventBinding): void {
    // 这里可以注册到全局 API 路由
    console.log(`API endpoint registered: /api/${apiName}`)
  }
  
  clear(componentId: string, event?: string): void {
    if (event) {
      this.events.delete(`${componentId}:${event}`)
    } else {
      // 清除该组件所有事件
      Array.from(this.events.keys())
        .filter(key => key.startsWith(`${componentId}:`))
        .forEach(key => this.events.delete(key))
    }
  }
}
