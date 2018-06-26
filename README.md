前端开发一个 crm 项目的时候，因为项目内容比较庞大，导致 webpack 编译和打包都巨慢，实在是影响开发效率，所以着手升级 webpack。

### [webpack4-es6-react][1]

[webpack4-es6-react][2]是一个全新的基于 webpack4、react16、es6、antd-mobile 的前端架构实现方案，默认是 antd-mobile,也可以自定义配置 ui 框架如：antd

### 功能

- 编译速度快（使用 happypack 插件实现多线程执行任务）
- 按需加载（不同页面文件单独压缩）
- hash 指纹（js、css 文件自动添加版本号）
- es2015
- 支持 less、stylus
- 图片体积小支持 base64 压缩
- 支持 svg 解析
- 支持自定义打包文件的目录
- 支持热更新
- 支持打包输出 map 文件
- 支持打包压缩文件
- 按需切割路由
- 打包支持缓存，第二次打包速度很快

### 使用版本

- webpack 4.7.0
- react 16.4.0
- react-dom 16.4.0
- react-router-dom 4.3.1
- antd 3.6.4

### 目录结构

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

### 克隆

```
git clone https://github.com/NewPrototype/webpack4-es6-react.git
```

### 安装依赖

```
npm install
```

### 编译

```
npm run start （开发模式）
```

默认浏览器会自动打开 `http://localhost:9999`，编译完成

### 打包

```
npm run build （生产模式）
```

### package.json

###### script

- npm run start 编译
- npm run build 打包
- npm run buildStats 输出 state.json，在官网http://webpack.github.io/analyse/中上传stats.json 分析数据

### package.json- script 参数解析

- --open 打开浏览器

- --color webpack 输出信息颜色

- --hot 热更新

- --inline 热更新的方式

- --mode development（开发模式） || production (生产模式)

- --profile webpack 运行信息
- --json > stats.json 输出 webpack 信息 在官网http://webpack.github.io/analyse/中上传stats.json 分析数据

### webpack.config.js

```
const { argv } = process;
let env = 'development'; //默认是开发模式
argv.forEach(v => {
  if (v == 'production') {
    env = 'production';
  }
});
```

##### 开发模式

- 无需 map 文件
- 无需压缩 css,js
- 启动多线程执行编译任务

##### 生产模式

- 生成 map
- 压缩文件
- 自动添加 hash 版本号（解决缓存问题）

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
- 支持TypeScript
- 提高 webpack 编译速度（一直在持续...）

### gitHub

https://github.com/NewPrototype/webpack4-es6-react

[1]: https://github.com/NewPrototype/webpack4-es6-react
[2]: https://github.com/NewPrototype/webpack4-es6-react
[3]: http://localhost:9999/
