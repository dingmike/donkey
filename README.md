Nezha
====

> 最近比较闲

实现一个迷你的类React库，用作记录学习React源码时的一些理解

## Step
```
# 开发模式
lerna link
npm run dev

# ssr demo演示
npm run dev:ssr
npm run build:ssr

# 打包
npm run build
```

## Feature

* 虚拟DOM
    * [x] Fiber Reconciler简单实现
    * [x] diff、key
    * [x] SSR
* 组件
    * [x] 类组件
    * [x] 函数组件
    * [x] 类组件生命周期
    * [x] 路由组件
    * [ ] hooks
    * [ ] refs
    * [x] Context
* 状态管理
    * [x] Nax
    * [x] 中间件


## TODO

* [ ] router处理hash变化（如id跳转锚点）导致的路由更新
* [ ] 多次setState进行合并，避免同一个组件触发多次更新，大体思路为使用alternate临时保存更新后的newState，并在commit时将其更新到state上
* [ ] hydrateDOM逻辑合并到diffRoot中，尽可能复用现有DOM节点
* [ ] 添加使用文档
