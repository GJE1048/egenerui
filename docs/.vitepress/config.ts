
import { defineConfig } from 'vitepress'

// 导航栏
const nav = [
  { text: 'Guide', link: '/guide/installation', activeMatch: '/guide/' },
  { text: 'Components', link: '/components/input/textbox', activeMatch: '/components/' },
  { text: 'API', link: '/api/core', activeMatch: '/api/' },
  { text: 'Examples', link: '/examples/basic-form', activeMatch: '/examples/' },
  {
    text: 'Resources',
    items: [
      { text: 'GitHub', link: 'https://github.com/yourusername/my-gradio' },
      { text: 'npm', link: 'https://www.npmjs.com/package/my-gradio' },
      { text: 'Discussions', link: 'https://github.com/yourusername/my-gradio/discussions' }
    ]
  }
]

// 侧边栏
const sidebar = {
  '/guide/': [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/guide/' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Quick Start', link: '/guide/quick-start' },
        { text: 'Project Structure', link: '/guide/project-structure' }
      ]
    },
    {
      text: 'Core Concepts',
      collapsed: true,
      items: [
        { text: 'Declarative UI', link: '/guide/declarative-ui' },
        { text: 'Components', link: '/guide/components' },
        { text: 'Events', link: '/guide/events' },
        { text: 'Data Binding', link: '/guide/data-binding' }
      ]
    },
    {
      text: 'Advanced',
      collapsed: true,
      items: [
        { text: 'Theming', link: '/guide/theming' },
        { text: 'State Management', link: '/guide/state-management' },
        { text: 'Server Integration', link: '/guide/server-integration' },
        { text: 'Performance', link: '/guide/performance' }
      ]
    }
  ],
  
  '/components/': [
    {
      text: 'Input Components',
      collapsed: false,
      items: [
        { text: 'Textbox', link: '/components/input/textbox' },
        { text: 'Slider', link: '/components/input/slider' },
        { text: 'Checkbox', link: '/components/input/checkbox' },
        { text: 'Radio', link: '/components/input/radio' },
        { text: 'Dropdown', link: '/components/input/dropdown' },
        { text: 'Image', link: '/components/input/image' },
        { text: 'File', link: '/components/input/file' }
      ]
    },
    {
      text: 'Output Components',
      collapsed: true,
      items: [
        { text: 'Label', link: '/components/output/label' },
        { text: 'Markdown', link: '/components/output/markdown' }
      ]
    },
    {
      text: 'Control Components',
      collapsed: true,
      items: [
        { text: 'Button', link: '/components/control/button' },
        { text: 'ClearButton', link: '/components/control/clear-button' },
        { text: 'ThemeToggle', link: '/components/control/theme-toggle' }
      ]
    },
    {
      text: 'Layout Components',
      collapsed: true,
      items: [
        { text: 'Row', link: '/components/layout/row' },
        { text: 'Column', link: '/components/layout/column' },
        { text: 'Tabs', link: '/components/layout/tabs' },
        { text: 'Accordion', link: '/components/layout/accordion' }
      ]
    }
  ],
  
  '/api/': [
    {
      text: 'API Reference',
      collapsed: false,
      items: [
        { text: 'Core', link: '/api/core' },
        { text: 'Components', link: '/api/components' },
        { text: 'Theme', link: '/api/theme' },
        { text: 'State', link: '/api/state' },
        { text: 'Client', link: '/api/client' }
      ]
    }
  ],
  
  '/examples/': [
    {
      text: 'Examples',
      collapsed: false,
      items: [
        { text: 'Basic Form', link: '/examples/basic-form' },
        { text: 'Calculator', link: '/examples/calculator' },
        { text: 'Image Generator', link: '/examples/image-generator' },
        { text: 'Chatbot', link: '/examples/chatbot' }
      ]
    }
  ]
}

export default defineConfig({
  // 站点配置
  title: 'MyGradio',
  description: 'Declarative UI framework for building tool interfaces',
  base: '/my-gradio/',
  
  // 主题配置
  appearance: 'dark',
  
  // 头部标签
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'author', content: 'MyGradio Team' }],
    ['meta', { name: 'keywords', content: 'ui, framework, gradio, declarative, typescript' }]
  ],
  
  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    
    nav,
    sidebar,
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/my-gradio' },
      { icon: 'twitter', link: 'https://twitter.com/yourusername' }
    ],
    
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 MyGradio Team'
    },
    
    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close'
                }
              }
            }
          }
        }
      }
    },
    
    // 返回顶部
    returnToTopLabel: 'Back to top',
    
    // 暗黑模式切换
    darkModeSwitchLabel: 'Appearance',
    sidebarMenuLabel: 'Menu',
    outlineTitle: 'On this page',
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/yourusername/my-gradio/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
  
  // Markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },
  
  // 最后更新时间
  lastUpdated: true
})
