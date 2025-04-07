# 🚀 Vite React JS 项目

这是一个使用 Vite 和 React 构建的现代化前端项目。本项目提供了一个最小化的设置，以获得 React 与 Vite 的 HMR（热模块替换）功能和一些 ESLint 规则的支持。

## 🛠️ 开发环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 🏃 安装和启动

1. 安装依赖
```bash
pnpm install
```

2. 启动开发服务器
```bash
pnpm dev
```
项目将在 http://localhost:5388 启动

3. 构建生产版本
```bash
pnpm build
```

4. 预览生产构建
```bash
pnpm preview
```

## 📁 项目结构

```
├── public/          # 静态资源目录
├── src/             # 源代码目录
│   ├── assets/      # 项目资源文件
│   ├── components/  # 公共组件
│   ├── views/       # 页面视图
│   ├── App.jsx      # 应用程序入口组件
│   ├── main.jsx     # 应用程序入口文件
│   └── index.css    # 全局样式
├── index.html       # HTML 模板
├── vite.config.js   # Vite 配置文件
└── eslint.config.js # ESLint 配置文件
```

## 📦 主要依赖

- ⚛️ React v19.0.0
- ⚡ Vite v6.2.0
- 🔍 ESLint v9.21.0
- 🛠️ @vitejs/plugin-react-swc v3.8.0

## 🔌 Vite 插件

目前有两个官方插件可用：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) 使用 [Babel](https://babeljs.io/) 实现快速刷新
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) 使用 [SWC](https://swc.rs/) 实现快速刷新

本项目使用 @vitejs/plugin-react-swc 作为开发环境的编译工具。

## ⚙️ ESLint 配置

如果你正在开发生产应用，我们建议使用 TypeScript 并启用类型感知的 lint 规则。查看 [TS 模板](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) 以将 TypeScript 和 [`typescript-eslint`](https://typescript-eslint.io) 集成到你的项目中。

## 💡 开发建议

1. 组件开发请遵循 React Hooks 的规则
2. 确保代码提交前通过 ESLint 检查：`pnpm lint`
3. 使用 CSS Reset 确保跨浏览器样式一致性
4. 遵循项目的目录结构组织代码
