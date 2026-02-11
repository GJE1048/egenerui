
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
      { text: 'GitHub', link: 'https://github.com/yourusername/my-gradio' },
      { text: 'npm', link: 'https://www.npmjs.com/package/my-gradio' },
      { text: '讨论区', link: 'https://github.com/yourusername/my-gradio/discussions' }
    ]
  }
]

// 侧边栏
const sidebar = {
  '/guide/': [
    {
      text: '入门指南',
      collapsed: false,
      items: [
        { text: '简介', link: '/guide/' },
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
        { text: '组件系统', link: '/guide/components' },
        { text: '事件处理', link: '/guide/events' },
        { text: '数据绑定', link: '/guide/data-binding' }
      ]
    },
    {
      text: '高级进阶',
      collapsed: true,
      items: [
        { text: '主题定制', link: '/guide/theming' },
        { text: '状态管理', link: '/guide/state-management' },
        { text: '服务端集成', link: '/guide/server-integration' },
        { text: '性能优化', link: '/guide/performance' }
      ]
    }
  ],
  
  '/components/': [
    {
      text: '输入组件',
      collapsed: false,
      items: [
        { text: '文本框 Textbox', link: '/components/input/textbox' },
        { text: '滑块 Slider', link: '/components/input/slider' },
        { text: '复选框 Checkbox', link: '/components/input/checkbox' },
        { text: '单选框 Radio', link: '/components/input/radio' },
        { text: '下拉框 Dropdown', link: '/components/input/dropdown' },
        { text: '图片 Image', link: '/components/input/image' },
        { text: '文件 File', link: '/components/input/file' }
      ]
    },
    {
      text: '输出组件',
      collapsed: true,
      items: [
        { text: '标签 Label', link: '/components/output/label' },
        { text: 'Markdown', link: '/components/output/markdown' }
      ]
    },
    {
      text: '控制组件',
      collapsed: true,
      items: [
        { text: '按钮 Button', link: '/components/control/button' },
        { text: '清除按钮 ClearButton', link: '/components/control/clear-button' },
        { text: '主题切换 ThemeToggle', link: '/components/control/theme-toggle' }
      ]
    },
    {
      text: '布局组件',
      collapsed: true,
      items: [
        { text: '行 Row', link: '/components/layout/row' },
        { text: '列 Column', link: '/components/layout/column' },
        { text: '标签页 Tabs', link: '/components/layout/tabs' },
        { text: '折叠面板 Accordion', link: '/components/layout/accordion' }
      ]
    }
  ],
  
  '/api/': [
    {
      text: 'API 参考',
      items: [
        { text: '核心系统 Core', link: '/api/core' },
        { text: '组件基类 Component', link: '/api/components' },
        { text: 'API 客户端 Client', link: '/api/client' },
        { text: '状态管理 State', link: '/api/state' },
        { text: '主题系统 Theme', link: '/api/theme' }
      ]
    }
  ],

  '/examples/': [
    {
      text: '实用示例',
      items: [
        { text: '基础表单', link: '/examples/basic-form' },
        { text: '计算器', link: '/examples/calculator' },
        { text: '聊天机器人', link: '/examples/chatbot' },
        { text: '图片生成器', link: '/examples/image-generator' }
      ]
    }
  ]
}

export default defineConfig({
  title: "MyGradio",
  description: "声明式 UI 框架",
  lang: 'zh-CN',
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/my-gradio' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2024-至今'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})
