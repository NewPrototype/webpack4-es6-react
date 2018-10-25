#### webpack4-es6-react

描述:一个基于 webpack4、React16、react-router-dom、es6、antd、axios 的前端项目，路由支持按需加载或按模块加载,ui框架默认配置是 antd,支持按需加载组件;

#### 运行项目
- ```cnpm i ``` 安装依赖,注意版本依赖版本
- ```npm run start ``` 启动项目

#### 锁定依赖版本
- ``` npm install || yarn install```  

#### 运行方法
- ```npm run dll``` 公共包第一次生成，后续都不需要重新生成，加快打包速度
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

#### 开发依赖
- webpack 4.23.1
- react 16.6.0
- react-dom 16.6.0
- react-router-dom 4.3.1
- antd 3.10.4
- axios 0.18.0
- react-loadable 5.5.0
- react-router 4.3.1
#### 目录结构

```
.
├── dist  --------------------- 打包文件
├── dll  --------------------- dll文件
├── webpack.config  --------------------- webpack相关配置
├── package.json  --------------------- 项目配置
├── yarn.json  --------------------- yarn 版本锁定
├── README.md  ------------------------ 说明文件
└── src  ------------------------------ 源码目录
    └── util  ------------------------ 辅助
        └── error.js  --------------------- 错误检查
        └── performance.js  --------------------- 页面性能
    ├── index.js  -------------------------- 入口文件路由配置
    ├── router.js  -------------------------- 路由配置
    ├── loadable.js  -------------------------- 按需加载路由配置
    ├── index.styl  -------------------------- 公共css
    ├── index.html  -------------------------- html入口文件
    ├── components  ------------------- 业务模块集合目录
    ├── api  ------------------- 接口集合
    ├── images  ----------------------- 图片资源目录
    └── pages  ------------------------ 页面集合目录
        └── home  --------------------- home页面
            ├── Home.js  ------------- 页面入口文件
            └── Home.styl  -------- 页面样式
            └── index.js  -------- 页面样式
```

#### 克隆

```
git clone https://github.com/NewPrototype/webpack4-es6-react.git
```


#### 速度

- 打包速度从 76830 毫秒提升到 14830 毫秒
  ```
  Hash: 7e97185183a8397d60dc
  Version: webpack 4.23.1
  Time: 14830ms
  Built at: 2018-06-11 11:20:01
  ```
- 热更新速度从 2500 毫到 500 毫秒左右
  ```
  Hash: df56e41b7815ca326b9e
  Version: webpack 4.23.1
  Time: 500ms
  Built at: 2018-06-12 15:27:47
  ```

#### todoList

- <del>按需加载路由</del>
- <del>输出 webpack 编译 json,分析编译时间</del>
- <del>支持 axios</del>
- <del>支持 TypeScript</del>
- <del>加入DllPlugin加快打包</del>
- 提高 webpack 编译速度（一直在持续...）