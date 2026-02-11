import { Button, ButtonComponent } from './Button'
import { getThemeManager } from '@my-gradio/theme'

export class ThemeToggleComponent extends ButtonComponent {
  constructor() {
    super('🌓')
    this.setupThemeToggle()
  }
  
  private setupThemeToggle(): void {
    const themeManager = getThemeManager()
    
    // 更新按钮图标
    const updateIcon = () => {
      this.setValue(themeManager.getCurrentTheme() === 'dark' ? '🌙' : '☀️')
    }
    
    updateIcon()
    
    // 监听主题变化
    window.addEventListener('theme:changed', updateIcon)
    
    // 点击切换
    this.click(() => {
      themeManager.toggleTheme()
    })
    
    // 添加样式
    this._config.elemClasses = ['gr-theme-toggle']
  }
  
  destroy(): void {
    window.removeEventListener('theme:changed', () => {})
  }
}

export type ThemeToggle = ThemeToggleComponent
export function ThemeToggle(): ThemeToggleComponent {
  return new ThemeToggleComponent()
}
