export interface ComponentConfig {
  label?: string
  value?: any
  visible?: boolean
  interactive?: boolean
  elemId?: string
  elemClasses?: string | string[]
  container?: boolean
  scale?: number
  minWidth?: number
  [key: string]: any
}

export type ComponentValue = any

export class Component<T = any> {
  protected _id: string
  protected _type: string
  protected _config: ComponentConfig
  protected _value: T
  protected _element: HTMLElement | null = null
  protected _parent: Component<any> | null = null
  protected _children: Component<any>[] = []
  
  // 事件回调
  protected _onClickHandlers: Array<(value: T) => void> = []
  protected _onChangeHandlers: Array<(value: T) => void> = []
  
  // 数据绑定
  protected _inputs: Component<any>[] = []
  protected _outputs: Component<any>[] = []
  
  constructor(type: string, config: ComponentConfig = {}) {
    this._id = this.generateId()
    this._type = type
    this._config = config
    this._value = config.value ?? this.getDefaultValue()
  }
  
  private generateId(): string {
    return `component-${Math.random().toString(36).substr(2, 9)}`
  }
  
  protected getDefaultValue(): T {
    return undefined as T
  }
  
  // ===== 公共 API =====
  
  get id(): string {
    return this._id
  }
  
  get type(): string {
    return this._type
  }
  
  get value(): T {
    return this._value
  }
  
  set value(val: T) {
    const oldValue = this._value
    this._value = val
    this.updateElement()
    this.emitChange(val, oldValue)
  }
  
  getValue(): T {
    return this._value
  }
  
  setValue(value: T, skipUpdate = false): this {
    this._value = value
    if (!skipUpdate) {
      this.updateElement()
    }
    return this
  }
  
  // 显示/隐藏
  show(): this {
    this._config.visible = true
    this.updateVisibility()
    return this
  }
  
  hide(): this {
    this._config.visible = false
    this.updateVisibility()
    return this
  }
  
  // 交互性
  enable(): this {
    this._config.interactive = true
    this.updateInteractivity()
    return this
  }
  
  disable(): this {
    this._config.interactive = false
    this.updateInteractivity()
    return this
  }
  
  // 事件绑定
  click(handler: (value: T) => void): this {
    this._onClickHandlers.push(handler)
    return this
  }
  
  change(handler: (value: T) => void): this {
    this._onChangeHandlers.push(handler)
    return this
  }
  
  protected emitClick(value: T): void {
    this._onClickHandlers.forEach(handler => handler(value))
  }
  
  protected emitChange(value: T, oldValue?: T): void {
    this._onChangeHandlers.forEach(handler => handler(value))
  }
  
  // 数据绑定方法
  setInputs(inputs: Component<any> | Component<any>[]): this {
    this._inputs = Array.isArray(inputs) ? inputs : [inputs]
    return this
  }
  
  setOutputs(outputs: Component<any> | Component<any>[]): this {
    this._outputs = Array.isArray(outputs) ? outputs : [outputs]
    return this
  }
  
  getInputs(): Component<any>[] {
    return this._inputs
  }
  
  getOutputs(): Component<any>[] {
    return this._outputs
  }
  
  // ===== 渲染相关 =====
  
  render(): HTMLElement {
    if (!this._element) {
      this._element = this.createElement()
      this.updateElement()
      this.updateVisibility()
      this.updateInteractivity()
    }
    return this._element
  }
  
  protected createElement(): HTMLElement {
    const div = document.createElement('div')
    div.className = `gr-component gr-${this._type}`
    div.id = this._id
    
    if (this._config.elemClasses) {
      const classes = Array.isArray(this._config.elemClasses) 
        ? this._config.elemClasses 
        : [this._config.elemClasses]
      classes.forEach(cls => div.classList.add(cls))
    }
    
    return div
  }
  
  protected updateElement(): void {
    if (this._element) {
      // 子类实现具体更新逻辑
    }
  }
  
  protected updateVisibility(): void {
    if (this._element) {
      this._element.style.display = this._config.visible === false ? 'none' : ''
    }
  }
  
  protected updateInteractivity(): void {
    // 子类实现
  }
  
  // ===== 布局相关 =====
  
  addTo(parent: Component<any>): this {
    this._parent = parent
    parent.addChild(this)
    return this
  }
  
  protected addChild(child: Component<any>): void {
    this._children.push(child)
  }
  
  // 序列化
  toJSON(): any {
    return {
      id: this._id,
      type: this._type,
      value: this._value,
      config: this._config
    }
  }
  
  toString(): string {
    return `[Component ${this._type}#${this._id}]`
  }
}
