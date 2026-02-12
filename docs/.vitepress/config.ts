
import { defineConfig } from 'vitepress'

// 导航栏
const nav = [
  { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
  { text: '组件', link: '/components/input/textbox', activeMatch: '/components/' },
  { text: 'API 参考', link: '/api/core', activeMatch: '/api/' },
  { text: '示例', link: '/examples/basic-form', activeMatch: '/examples/' },
  {
    text: '资源',
    items: [
      { text: 'GitHub', link: 'https://github.com/GJE1048/egenerui' },
      { text: 'npm', link: 'https://www.npmjs.com/package/egenerui' },
      { text: '讨论', link: 'https://github.com/GJE1048/egenerui/discussions' }
    ]
  }
]

// 侧边栏
const sidebar = {
  '/guide/': [
    {
      text: '入门',
      collapsed: false,
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '安装', link: '/guide/installation' },
        { text: '快速上手', link: '/guide/quick-start' },
        { text: '项目结构', link: '/guide/project-structure' }
      ]
    },
    {
      text: '核心概念',
      collapsed: true,
      items: [
        { text: '声明式 UI', link: '/guide/declarative-ui' },
        { text: '组件', link: '/guide/components' },
        { text: '事件', link: '/guide/events' },
        { text: '数据绑定', link: '/guide/data-binding' }
      ]
    },
    {
      text: '进阶',
      collapsed: true,
      items: [
        { text: '主题', link: '/guide/theming' },
        { text: '状态管理', link: '/guide/state-management' },
        { text: '服务端集成', link: '/guide/server-integration' },
        { text: '导入与打包', link: '/guide/import-and-bundling' },
        { text: '性能优化', link: '/guide/performance' }
      ]
    }
  ],
  
  '/components/': [
    {
      text: '输入组件',
      collapsed: false,
      items: [
        { text: '文本框', link: '/components/input/textbox' },
        { text: '滑块', link: '/components/input/slider' },
        { text: '复选框', link: '/components/input/checkbox' },
        { text: '单选/复选组', link: '/components/input/radio' },
        { text: '下拉选择', link: '/components/input/dropdown' },
        { text: '图片', link: '/components/input/image' },
        { text: '文件', link: '/components/input/file' }
      ]
    },
    {
      text: '输出组件',
      collapsed: true,
      items: [
        { text: '标签', link: '/components/output/label' },
        { text: 'Markdown', link: '/components/output/markdown' }
      ]
    },
    {
      text: '控制组件',
      collapsed: true,
      items: [
        { text: '按钮', link: '/components/control/button' },
        { text: '清空按钮', link: '/components/control/clear-button' },
        { text: '主题切换', link: '/components/control/theme-toggle' }
      ]
    },
    {
      text: '布局组件',
      collapsed: true,
      items: [
        { text: '行布局', link: '/components/layout/row' },
        { text: '列布局', link: '/components/layout/column' },
        { text: '选项卡', link: '/components/layout/tabs' },
        { text: '折叠面板', link: '/components/layout/accordion' }
      ]
    }
  ],
  
  '/api/': [
    {
      text: 'API 参考',
      collapsed: false,
      items: [
        { text: '核心', link: '/api/core' },
        { text: '组件', link: '/api/components' },
        { text: '主题', link: '/api/theme' },
        { text: '状态', link: '/api/state' },
        { text: '客户端', link: '/api/client' }
      ]
    }
  ],
  
  '/examples/': [
    {
      text: '示例',
      collapsed: false,
      items: [
        { text: '基础表单', link: '/examples/basic-form' },
        { text: '计算器', link: '/examples/calculator' },
        { text: '图像生成器', link: '/examples/image-generator' },
        { text: '聊天机器人', link: '/examples/chatbot' }
      ]
    }
  ]
}

export default defineConfig({
  // 站点配置
  title: 'Egenerui',
  description: '用于构建工具界面的声明式 UI 框架',
  base: '/egenerui/',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  },
  
  // 主题配置
  appearance: 'dark',
  
  // 头部标签
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'author', content: 'Egenerui 团队' }],
    ['meta', { name: 'keywords', content: 'UI, 框架, gradio, 声明式, TypeScript' }]
  ],
  
  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    
    nav,
    sidebar,
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GJE1048/egenerui' },
      { icon: 'twitter', link: 'https://twitter.com/yourusername' }
    ],
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2026 Egenerui 团队'
    },
    
    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有匹配结果',
                resetButtonTitle: '清除搜索',
                footer: {
                  selectText: '选择',
                  navigateText: '导航',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    
    // 返回顶部
    returnToTopLabel: '返回顶部',
    
    // 暗黑模式切换
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    outlineTitle: '本页目录',
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/GJE1048/egenerui/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
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
