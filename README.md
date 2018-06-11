**如果你刚拿到这个项目，请先在项目目录下执行 `npm install`！**

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
