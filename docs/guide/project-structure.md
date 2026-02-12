# 项目结构

一个典型的 Egenerui 项目包含以下部分：

```
my-app/
├── index.html              # HTML 入口
├── main.ts                 # 应用入口（创建组件、布局与 launch）
├── package.json            # 项目配置与脚本
├── vite.config.ts          # Vite 开发与构建配置
├── tsconfig.json           # TypeScript 配置
└── public/                 # 静态资源
```

## 代码组织建议
- 组件：将常用组件的创建逻辑抽到 `components/`（可选）
- 业务函数：保持纯函数，便于事件系统的输入/输出绑定与测试
- 样式：可直接使用内置样式，或在 `style.css` 中覆盖

## 与库的关系
- 渲染：由 Renderer 单例负责挂载与关闭
- 事件：由 Button.click 等 API 将输入与输出编排为业务流程
- 状态：全局状态使用 StateManager，避免跨组件传参
- 主题：通过 ThemeManager 加载与切换
