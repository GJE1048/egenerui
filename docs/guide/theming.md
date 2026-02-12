# 主题

Egenerui 的主题由 ThemeManager 统一管理，支持内置与自定义主题，并通过 CSS 变量驱动样式。

## 切换主题

```ts
import { ThemeToggle } from 'egenerui'

const toggle = ThemeToggle()
```

将 `ThemeToggle` 放入布局即可提供浅/深色切换。

## 程序化加载主题

```ts
import { getThemeManager, builtinThemes } from 'egenerui'

const tm = getThemeManager()
tm.loadTheme('dark')           // 使用内置深色主题
tm.loadTheme('light')          // 使用内置浅色主题
tm.toggleTheme()               // 在浅/深色之间切换
```

## 自定义主题

```ts
import { getThemeManager } from 'egenerui'

const tm = getThemeManager()
tm.registerTheme('brand', {
  name: 'Brand',
  colors: { primary: '#2563eb', secondary: '#64748b', accent: '#22d3ee', success: '#10b981', warning: '#f59e0b', error: '#ef4444', info: '#3b82f6', background: '#ffffff', surface: '#f8fafc', border: '#e2e8f0', text: '#1e293b', textSecondary: '#64748b', textDisabled: '#94a3b8', shadow: 'rgba(0,0,0,0.1)' },
  spacing: { xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem' },
  typography: {
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    fontSize: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem' },
    fontWeight: { light: 300, normal: 400, medium: 500, semibold: 600, bold: 700 },
    lineHeight: { normal: 1.5, relaxed: 1.75 }
  },
  borderRadius: { sm: '0.25rem', md: '0.5rem', lg: '0.75rem', full: '9999px' },
  boxShadow: { sm: '0 1px 2px rgba(0,0,0,0.05)', md: '0 4px 6px rgba(0,0,0,0.1)', lg: '0 10px 15px rgba(0,0,0,0.1)', xl: '0 20px 25px rgba(0,0,0,0.1)' },
  transition: { default: 'all .2s ease', fast: 'all .1s ease', slow: 'all .3s ease' }
})

tm.loadTheme('brand')
```

更多细节请参阅 [主题 API](/api/theme)。
