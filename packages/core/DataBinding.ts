import { Component } from './Component'

export class DataBinding {
  static bind(source: Component<any>, target: Component<any>, transform?: (value: any) => any): void {
    source.change((value) => {
      const newValue = transform ? transform(value) : value
      target.setValue(newValue)
    })
  }
  
  static twoWay(component1: Component<any>, component2: Component<any>): void {
    component1.change(value => component2.setValue(value, true))
    component2.change(value => component1.setValue(value, true))
  }
  
  static computed<T>(
    sources: Component<any>[],
    computeFn: (...values: any[]) => T
  ): Component<T> {
    const computedComponent = new Proxy({} as Component<T>, {
      get(target, prop) {
        if (prop === 'getValue') {
          return () => computeFn(...sources.map(s => s.getValue()))
        }
        return Reflect.get(target, prop)
      }
    })
    
    sources.forEach(source => {
      source.change(() => {
        // 触发更新
      })
    })
    
    return computedComponent as any
  }
}
