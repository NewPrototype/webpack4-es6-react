基于 webpack4.0 搭建并且学习 webpack，以及其他相关技术

### [webpack4-es6-react][1]

[webpack4-es6-react][2]是一个全新的基于 webpack4、react16、es6、antd-mobile 的前端架构实现方案，默认是 antd-mobile,也可以自定义配置 ui 框架如：antd

#### 使用步骤
- ```cnpm i ``` 安装依赖,注意版本依赖版本
- ```npm run dll``` 公共包第一次生成，后续都不需要重新生成，加快打包速度

#### 锁定依赖版本
- ``` npm install || yarn install```  

#### 运行方法
- ```npm run start``` 启动项目
- ```npm run dev``` 快捷打包，不压缩文件，发布测试环境
- ```npm run build``` 正式打包，压缩文件,发布生产环境

#### 功能

- 编译速度快（使用 happypack 插件实现多线程执行任务）
- 按需加载（不同页面文件单独压缩）
- hash 指纹（js、css 文件自动添加版本号）
- es2015
- 支持 less、stylus
- 图片体积小支持 base64 压缩
- 支持 svg 解析
- 支持自定义打包文件的目录
- 支持热更新
- 支持打包输出 map 文件，去除 console.log,注释
- 支持打包压缩文件
- 按需切割路由 router.js 里面
- 增加 dll 加快打包速度

#### 使用版本

- webpack 4.7.0
- react 16.4.0
- react-dom 16.4.0
- react-router-dom 4.3.1
- antd 3.6.4

#### 目录结构

```
.
├── dist  --------------------- 打包文件
├── webpack.config  --------------------- webpack相关配置
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
└── src  ------------------------------ 源码目录
    ├── index.js  -------------------------- 入口文件路由配置
    ├── index.styl  -------------------------- 公共css
    ├── index.html  -------------------------- html入口文件
    ├── components  ------------------- 业务模块集合目录
    ├── api  ------------------- 接口集合
    ├── config.js  ------------------- 配置文件
    ├── images  ----------------------- 图片资源目录
    └── pages  ------------------------ 页面集合目录
        └── home  --------------------- 某一个页面
            ├── Home.js  ------------- 页面入口文件
            └── Home.styl  -------- 页面样式
            └── index.js  -------- 页面样式
```

#### 克隆

```
git clone https://github.com/NewPrototype/webpack4-es6-react.git
```


#### package.json

###### script

- npm run start 编译
- npm run build 打包
- npm run buildStats 输出 state.json，在官网http://webpack.github.io/analyse/中上传stats.json 分析数据

#### package.json- script 参数解析

- --open 打开浏览器

- --color webpack 输出信息颜色

- --hot 热更新

- --inline 热更新的方式

- --mode development（开发模式） || production (生产模式)

- --profile webpack 运行信息
- --json > stats.json 输出 webpack 信息 在官网http://webpack.github.io/analyse/中上传stats.json 分析数据

### webpack.config.js


### DllPlugin

- 介绍 比如 react 我们不想每次都编译，浪费重复的时间，那么就可以将 react 加入到 webpack.dll.config.js 里面的 vendors 数组中，然后执行 `npm run dll`
- 会输出 dll 文件夹，包含 Dll.js 和 manifest.json 文件，
- manifest.json 包含 vendors 里面包的路径，编译是不会编译这些不需要编译的文件，会加快编译速度


##### 速度

- 编译从 76830ms 提升到 14830ms
  ```
  Hash: 7e97185183a8397d60dc
  Version: webpack 4.12.0
  Time: 14830ms
  Built at: 2018-06-11 11:20:01
  ```
- 热更新速度从 2.5 秒到 1 秒左右
  ```
  Hash: df56e41b7815ca326b9e
  Version: webpack 4.12.0
  Time: 758ms
  Built at: 2018-06-12 15:27:47
  ```

### todoList

- <del>按需加载路由</del>
- <del>输出 webpack 编译 json,分析编译时间</del>
- <del>支持 axios</del>
- <del>支持 TypeScript</del>
- <del>加入DllPlugin加快打包</del>
- 提高 webpack 编译速度（一直在持续...）


### gitHub

https://github.com/NewPrototype/webpack4-es6-react

[1]: https://github.com/NewPrototype/webpack4-es6-react
[2]: https://github.com/NewPrototype/webpack4-es6-react
[3]: http://localhost:9999/

### 项目介绍

webpack4-es6-react
- 介绍：一个基于webpack4、es6、react、react-router4、axios技术的项目架构
- 地址：https://github.com/NewPrototype/webpack4-es6-react

webpack4-es6-react-typescript
- 介绍：一个基于jest、typescript、webpack4、es6、react、react-router4、axios技术的项目架构
- 地址：https://github.com/NewPrototype/webpack4-es6-react-typescript

template-cli
- 介绍：操作终端下载react和typescript模版
- 地址：https://github.com/NewPrototype/template-cli

template
- 介绍：react、typescript模版文件
- 地址：https://github.com/NewPrototype/template

electron-web
- 介绍：electron前端项目
- 地址：https://github.com/NewPrototype/electron-web

electron-node
- 介绍：electron node服务器
- 地址：https://github.com/NewPrototype/electron-server
