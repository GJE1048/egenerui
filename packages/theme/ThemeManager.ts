export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  success: string
  warning: string
  error: string
  info: string
  
  background: string
  surface: string
  border: string
  
  text: string
  textSecondary: string
  textDisabled: string
  
  shadow: string
}

export interface ThemeSpacing {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export interface ThemeTypography {
  fontFamily: string
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
  }
  fontWeight: {
    light: number
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  lineHeight: {
    normal: number
    relaxed: number
  }
}

export interface ThemeConfig {
  name: string
  colors: ThemeColors
  spacing: ThemeSpacing
  typography: ThemeTypography
  borderRadius: {
    sm: string
    md: string
    lg: string
    full: string
  }
  boxShadow: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  transition: {
    default: string
    fast: string
    slow: string
  }
}

// 内置主题
export const builtinThemes: Record<string, ThemeConfig> = {
  light: {
    name: 'Light',
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      accent: '#8b5cf6',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      
      background: '#ffffff',
      surface: '#f8fafc',
      border: '#e2e8f0',
      
      text: '#1e293b',
      textSecondary: '#64748b',
      textDisabled: '#94a3b8',
      
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      lineHeight: {
        normal: 1.5,
        relaxed: 1.75
      }
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      full: '9999px'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    transition: {
      default: 'all 0.2s ease',
      fast: 'all 0.1s ease',
      slow: 'all 0.3s ease'
    }
  },
  
  dark: {
    name: 'Dark',
    colors: {
      primary: '#60a5fa',
      secondary: '#94a3b8',
      accent: '#a78bfa',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
      
      background: '#0f172a',
      surface: '#1e293b',
      border: '#334155',
      
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      textDisabled: '#64748b',
      
      shadow: 'rgba(0, 0, 0, 0.3)'
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      lineHeight: {
        normal: 1.5,
        relaxed: 1.75
      }
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      full: '9999px'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4)'
    },
    transition: {
      default: 'all 0.2s ease',
      fast: 'all 0.1s ease',
      slow: 'all 0.3s ease'
    }
  },
  
  // 更多主题...
  rose: {
    name: 'Rose',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      accent: '#f472b6',
      success: '#22c55e',
      warning: '#eab308',
      error: '#ef4444',
      info: '#06b6d4',
      
      background: '#fef2f2',
      surface: '#fff',
      border: '#fca5a5',
      
      text: '#1f2937',
      textSecondary: '#6b7280',
      textDisabled: '#9ca3af',
      
      shadow: 'rgba(236, 72, 153, 0.1)'
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem'
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      lineHeight: {
        normal: 1.5,
        relaxed: 1.75
      }
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      full: '9999px'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    },
    transition: {
      default: 'all 0.2s ease',
      fast: 'all 0.1s ease',
      slow: 'all 0.3s ease'
    }
  }
}

export class ThemeManager {
  private currentTheme: string = 'light'
  private customThemes: Map<string, ThemeConfig> = new Map()
  
  constructor() {
    this.loadTheme('light')
  }
  
  registerTheme(name: string, config: ThemeConfig): void {
    this.customThemes.set(name, config)
  }
  
  getTheme(name: string): ThemeConfig | undefined {
    return this.customThemes.get(name) || builtinThemes[name]
  }
  
  loadTheme(name: string): void {
    const theme = this.getTheme(name)
    if (!theme) {
      console.warn(`Theme "${name}" not found, using "light"`)
      this.currentTheme = 'light'
      this.applyTheme(builtinThemes.light)
      return
    }
    
    this.currentTheme = name
    this.applyTheme(theme)
    
    // 触发主题变更事件
    window.dispatchEvent(new CustomEvent('theme:changed', { detail: { name } }))
  }
  
  private applyTheme(theme: ThemeConfig): void {
    // 创建或更新 style 标签
    let style = document.getElementById('gradio-theme') as HTMLStyleElement
    if (!style) {
      style = document.createElement('style')
      style.id = 'gradio-theme'
      document.head.appendChild(style)
    }
    
    // 生成 CSS 变量
    const cssVars = this.generateCSSVars(theme)
    style.textContent = cssVars
    
    // 更新 data-theme 属性
    document.documentElement.setAttribute('data-theme', theme.name)
  }
  
  private generateCSSVars(theme: ThemeConfig): string {
    const vars: string[] = []
    
    // 颜色变量
    Object.entries(theme.colors).forEach(([key, value]) => {
      vars.push(`--gr-${key}: ${value}`)
    })
    
    // 间距变量
    Object.entries(theme.spacing).forEach(([key, value]) => {
      vars.push(`--gr-spacing-${key}: ${value}`)
    })
    
    // 圆角变量
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      vars.push(`--gr-radius-${key}: ${value}`)
    })
    
    // 阴影变量
    Object.entries(theme.boxShadow).forEach(([key, value]) => {
      vars.push(`--gr-shadow-${key}: ${value}`)
    })
    
    // 过渡变量
    Object.entries(theme.transition).forEach(([key, value]) => {
      vars.push(`--gr-transition-${key}: ${value}`)
    })
    
    // 字体变量
    vars.push(`--gr-font-family: ${theme.typography.fontFamily}`)
    Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
      vars.push(`--gr-font-size-${key}: ${value}`)
    })
    Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
      vars.push(`--gr-font-weight-${key}: ${value}`)
    })
    
    return `
      :root {
        ${vars.join('\n        ')}
      }
      
      /* 组件样式 */
      .gradio-app {
        background-color: var(--gr-background);
        color: var(--gr-text);
        font-family: var(--gr-font-family);
        transition: var(--gr-transition-default);
      }
      
      .gr-component {
        background-color: var(--gr-surface);
        border: 1px solid var(--gr-border);
        border-radius: var(--gr-radius-md);
        box-shadow: var(--gr-shadow-sm);
      }
      
      .gr-button-primary {
        background-color: var(--gr-primary);
        color: white;
      }
      
      .gr-button-primary:hover:not(:disabled) {
        background-color: ${this.darkenColor(theme.colors.primary, 0.1)};
      }
      
      .gr-textbox-input {
        border-color: var(--gr-border);
        background-color: var(--gr-surface);
        color: var(--gr-text);
      }
      
      .gr-textbox-input:focus {
        border-color: var(--gr-primary);
        box-shadow: 0 0 0 3px ${this.lightenColor(theme.colors.primary, 0.7)};
      }
    `
  }
  
  private darkenColor(color: string, amount: number): string {
    // 简单的颜色变暗
    const num = parseInt(color.replace('#', ''), 16)
    const r = Math.max(0, Math.floor((num >> 16) * (1 - amount)))
    const g = Math.max(0, Math.floor(((num >> 8) & 0x00FF) * (1 - amount)))
    const b = Math.max(0, Math.floor((num & 0x0000FF) * (1 - amount)))
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }
  
  private lightenColor(color: string, amount: number): string {
    // 简单的颜色变亮
    const num = parseInt(color.replace('#', ''), 16)
    const r = Math.min(255, Math.floor((num >> 16) * (1 + amount)))
    const g = Math.min(255, Math.floor(((num >> 8) & 0x00FF) * (1 + amount)))
    const b = Math.min(255, Math.floor((num & 0x0000FF) * (1 + amount)))
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  }
  
  getCurrentTheme(): string {
    return this.currentTheme
  }
  
  toggleTheme(): void {
    this.loadTheme(this.currentTheme === 'light' ? 'dark' : 'light')
  }
}

// 全局主题管理器
let globalThemeManager: ThemeManager | null = null

export function getThemeManager(): ThemeManager {
  if (!globalThemeManager) {
    globalThemeManager = new ThemeManager()
  }
  return globalThemeManager
}
