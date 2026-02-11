
type StateListener<T> = (value: T) => void

export interface StateOptions {
  persist?: boolean
  key?: string
  storage?: 'local' | 'session' | 'url'
}

export class StateManager {
  private _state: Map<string, any> = new Map()
  private _listeners: Map<string, Set<StateListener<any>>> = new Map()
  
  constructor() {
    this.loadFromUrl()
  }
  
  set<T>(key: string, value: T, options: StateOptions = {}): void {
    const oldValue = this._state.get(key)
    if (oldValue === value) return
    
    this._state.set(key, value)
    
    // Persistence
    if (options.persist) {
      this.persistState(key, value, options)
    }
    
    // Notify listeners
    this.notify(key, value)
  }
  
  get<T>(key: string, defaultValue?: T): T | undefined {
    return this._state.has(key) ? this._state.get(key) : defaultValue
  }
  
  subscribe<T>(key: string, listener: StateListener<T>): () => void {
    if (!this._listeners.has(key)) {
      this._listeners.set(key, new Set())
    }
    
    this._listeners.get(key)!.add(listener)
    
    // Initial callback if value exists
    if (this._state.has(key)) {
      listener(this._state.get(key))
    }
    
    return () => {
      const listeners = this._listeners.get(key)
      if (listeners) {
        listeners.delete(listener)
      }
    }
  }
  
  private notify(key: string, value: any): void {
    const listeners = this._listeners.get(key)
    if (listeners) {
      listeners.forEach(listener => listener(value))
    }
  }
  
  private persistState(key: string, value: any, options: StateOptions): void {
    const storageKey = options.key || key
    
    if (options.storage === 'local') {
      localStorage.setItem(storageKey, JSON.stringify(value))
    } else if (options.storage === 'session') {
      sessionStorage.setItem(storageKey, JSON.stringify(value))
    } else if (options.storage === 'url') {
      const url = new URL(window.location.href)
      if (value === null || value === undefined || value === '') {
        url.searchParams.delete(storageKey)
      } else {
        url.searchParams.set(storageKey, String(value))
      }
      window.history.replaceState({}, '', url.toString())
    }
  }
  
  private loadFromUrl(): void {
    const url = new URL(window.location.href)
    url.searchParams.forEach((value, key) => {
      // Try to parse number or boolean
      let parsedValue: any = value
      if (value === 'true') parsedValue = true
      else if (value === 'false') parsedValue = false
      else if (!isNaN(Number(value)) && value.trim() !== '') parsedValue = Number(value)
      
      this._state.set(key, parsedValue)
    })
  }
}

let globalStateManager: StateManager | null = null

export function getStateManager(): StateManager {
  if (!globalStateManager) {
    globalStateManager = new StateManager()
  }
  return globalStateManager
}
