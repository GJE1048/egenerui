
import DefaultTheme from 'vitepress/theme'
import './style.css'
import MyGradioDemo from './MyGradioDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('MyGradioDemo', MyGradioDemo)
  }
}
