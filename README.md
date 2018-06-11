#### 这里采用的是 webpack4.0 react15.0 es6 来构建

#####随着项目的日益增长，webpack1.0 运行速度慢慢变慢，初始编译`npm run start`,时间长达 6 秒左右，然后修改文件的时候，虽然是读取内存会快很多，但是依旧达到了 1 秒左右，严重影响了开发效率，于是就开始重构打包工具。

**如果你刚拿到这个项目，请先在项目目录下执行 `npm install`！**
## webpack提供的功能
- 按需加载
- js和css指纹
- 打包生成map文件
- es6语法编译
- less，css，stylus样式支持
- react语法编译

## 目录结构

```
.
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
            └── App.styl  -------- 页面样式
```

## 环境准备

环境准备妥当之后，把项目 clone 下来，切换到对应分支。更新项目依赖：

```
npm install
```

更新完成后即可开始开发。

## 常用命令

- 启动调试服务器

```
npm run  start
```

可以看到 webpack 的运行信息

```
Hash: 7e97185183a8397d60dc
Version: webpack 4.12.0
Time: 14830ms
Built at: 2018-06-11 11:20:01
```

> 上面的命令会开启一个本地调试服务器（[http://localhost:9999/](http://localhost:9999/)）。此时，项目`src`目录下的任何文件的变化，都会触发实时构建，并把变更同步到浏览器。

- 本地打包压缩

```
npm run build
```

- package.json

```
"start": "webpack-dev-server  --open --color --hot --mode development --inline   --profile  ",
```

```
"buildclean": "rimraf ../crm-release/mobile/*",   //打包删除 ../crm-release/mobile文件
```

```
"buildcopy": "copyfiles -f ./dist/* ../crm-release/mobile/",  //复制dist到../crm-release/mobile/文件
"buildClean": "rimraf ./dist"   //清空项目dist
```

```
"build": "npm run buildclean & npm run buildcopy &&  webpack --progress --profile --mode production && npm run buildClean ",
```

```

```

- webpack 参数解析

```
--open 打开浏览器
```

```
--color webpack信息颜色
```

```
--hot 热更新
```

```
--inline 热更新的方式
```

```
--mode development || production 开发模式
```

```
--profile webpack 运行信息
```
