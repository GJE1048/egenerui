
import { getStateManager } from './StateManager'

export function persist(options: { key?: string; storage?: 'local' | 'session' | 'url' } = {}) {
  return function (target: any, propertyKey: string) {
    const stateManager = getStateManager()
    const storageKey = options.key || propertyKey
    
    // 初始化时尝试从存储加载
    const savedValue = options.storage === 'local' 
      ? localStorage.getItem(storageKey)
      : options.storage === 'session'
        ? sessionStorage.getItem(storageKey)
        : null
        
    let value = savedValue ? JSON.parse(savedValue) : undefined
    
    // 定义属性 getter/setter
    Object.defineProperty(target, propertyKey, {
      get: function() {
        return value
      },
      set: function(newValue) {
        value = newValue
        stateManager.set(storageKey, newValue, { ...options, persist: true })
      },
      enumerable: true,
      configurable: true
    })
  }
}
