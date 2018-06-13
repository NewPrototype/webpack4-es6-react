前端开发一个crm项目的时候，因为项目内容比较庞大，导致webpack编译和打包都巨慢，实在是影响开发效率，所以着手升级webpack。

### [webpack4-es6-react][1]
[webpack4-es6-react][2]是一个全新的基于webpack4、react16、es6、antd-mobile的前端架构实现方案，默认是antd-mobile,也可以自定义配置ui框架如：antd

### 功能
- 编译速度快（使用happypack插件实现多线程执行任务）
- 按需加载（不同页面文件单独压缩）
- hash指纹（js、css文件自动添加版本号）
- es2015
- 支持less、stylus 
- 图片体积小支持base64压缩
- 支持svg解析
- 支持自定义打包文件的目录
- 支持热更新
- 支持打包输出map文件
- 支持打包压缩文件

### 使用版本
- webpack 4.7.0
- react 16.4.0
- react-dom  16.4.0
### 目录结构

```
.
├── dist  --------------------- 打包文件
├── webpack.config  --------------------- webpack相关配置
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
└── src  ------------------------------ 源码目录
    ├── index  -------------------------- 入口文件
    ├── index.html  -------------------------- html入口文件
    ├── components  ------------------- 业务模块集合目录
    ├── images  ----------------------- 图片资源目录
    └── pages  ------------------------ 页面集合目录
        └── App  --------------------- 某一个页面
            ├── App.js  ------------- 页面入口文件
            └── App.css  -------- 页面样式
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
默认浏览器会自动打开 ```http://localhost:9999```，编译完成

### 打包
```
npm run build （生产模式）
```


### package.json

###### script
- npm run start 编译
- npm run build 打包
- npm run buildStats 输出state.json，在官网http://webpack.github.io/analyse/中上传stats.json 分析数据

### package.json- script 参数解析
- --open 打开浏览器

- --color webpack输出信息颜色

- --hot 热更新

- --inline 热更新的方式

- --mode development（开发模式） || production (生产模式)

- --profile webpack 运行信息
- --json > stats.json 输出webpack信息 在官网http://webpack.github.io/analyse/中上传stats.json 分析数据


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
- 无需map文件
- 无需压缩css,js
- 启动多线程执行编译任务
##### 生产模式
- 生成map
- 压缩文件
- 自动添加hash版本号（解决缓存问题）

##### 速度
- 编译从76830ms提升到14830ms
    ```
    Hash: 7e97185183a8397d60dc
    Version: webpack 4.12.0
    Time: 14830ms
    Built at: 2018-06-11 11:20:01
    ```
- 热更新速度从2.5秒到1秒左右
    ```
    Hash: df56e41b7815ca326b9e
    Version: webpack 4.12.0
    Time: 758ms
    Built at: 2018-06-12 15:27:47
    ```
    
### todoList
- 按需加载路由
- <del>输出 webpack编译json,分析编译时间</del>
- 支持多入口
- react-redux一键生成模版
- 支持axios
- 提高webpack编译速度（一直在持续...）

### gitHub
https://github.com/NewPrototype/webpack4-es6-react



  [1]: https://github.com/NewPrototype/webpack4-es6-react
  [2]: https://github.com/NewPrototype/webpack4-es6-react
  [3]: http://localhost:9999/