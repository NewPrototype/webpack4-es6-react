const path = require('path');
const theme = require(path.join(__dirname, '/package.json')).theme;
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //多线程压缩
const ExtendedDefinePlugin = require('extended-define-webpack-plugin'); //全局变量
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清空
const CopyWebpackPlugin = require('copy-webpack-plugin'); //复制静态html
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin; //视图分析webpack情况

const HappyPack = require('happypack'); //多线程运行
var happyThreadPool = HappyPack.ThreadPool({ size: 4 });
const devtool = {
  dev: 'cheap-eval-source-map',
  development: 'cheap-eval-source-map',
  production: 'source-map',
};
const publicPath = {
  dev: './',
  development: '/',
  production: './',
};

const minimize = {
  dev: false,
  development: false,
  production: true,
};
const stylus = {
  dev: ['cache-loader', 'style-loader', 'css-loader', 'stylus-loader'],
  development: ['style-loader', 'css-loader', 'stylus-loader'],
  production: [
    { loader: MiniCssExtractPlugin.loader },
    {
      loader: 'css-loader',
      options: {
        minimize: true, //压缩
        sourceMap: true,
      },
    },
    { loader: 'stylus-loader' },
  ],
};

/**
 * 公共插件
 */
const pluginsPublic = [
  new HtmlWebpackPlugin({
    template: `${__dirname}/src/index.html`, //源html
    inject: 'body', //注入到哪里
    filename: 'index.html', //输出后的名称
    hash: true, //为静态资源生成hash值
    showErrors: true,
  }),
  new BundleAnalyzerPlugin({   //另外一种方式
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8889,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'info',
  }),
  new MiniCssExtractPlugin({
    chunkFilename: '[chunkhash].css',
  }),
  new HappyPack({
    //多线程运行 默认是电脑核数-1
    id: 'babel', //对于loaders id
    loaders: ['cache-loader', 'babel-loader?cacheDirectory'], //是用babel-loader解析
    threadPool: happyThreadPool,
    verboseWhenProfiling: true, //显示信息
  }),
];
/**
 * 公共打包插件
 */
const pluginsBuild = [
  new ExtendedDefinePlugin({
    //全局变量
    __LOCAL__: false,
  }),
  new CleanWebpackPlugin(['dist'], {
    root: __dirname,
  }),
  new CopyWebpackPlugin([
    { from: 'dll/Dll.js', to: path.resolve(__dirname, 'dist') },
  ]),
  new webpack.HashedModuleIdsPlugin(),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require('./dll/manifest.json')
  }),
 
];

const plugins = {
  dev: [].concat(pluginsPublic, pluginsBuild),
  development: [].concat(
    pluginsPublic,
    new ExtendedDefinePlugin({
      //全局变量
      __LOCAL__: true,
    })
  ),
  production: [].concat(
    pluginsPublic,
    pluginsBuild,
    new UglifyJsPlugin({
      // sourceMap: true,
      parallel: true,
      cache: true,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
        },
        compress: {
          drop_console: true,
          warnings: false,
          drop_debugger: true,
        },
      },
      exclude: /(node_modules|bower_components)/,
    }) //压缩，生成map
  ),
};



module.exports = (env, argv) => {
  const dev = env.dev;
  return {
    devServer: {
      compress: true, //开发服务器是否启动gzip等压缩
      port: 8000, //端口
      historyApiFallback: true, //不会出现404页面，避免找不到
    },
    devtool: devtool[dev], //cheap-eval-source-map  是一种比较快捷的map,没有映射列
    performance: {
      maxEntrypointSize: 250000, //入口文件大小，性能指示
      maxAssetSize: 250000, //生成的最大文件
      hints: 'warning', //依赖过大是否错误提示
    },
    entry: {
      //入口
      index: './src/index.js',
    },
    output: {
      //出口
      path: path.resolve(__dirname, 'dist'), //出口路径
      filename: 'index.js',
      chunkFilename: '[chunkhash].js',  //按需加载名称
      publicPath: publicPath[dev], //公共路径
    },
    resolve: {
      mainFields: ['main', 'jsnext:main', 'browser'], //npm读取先后方式  jsnext:main 是采用es6模块写法
      alias: {
        //快捷入口
        api: path.resolve(__dirname, 'src/api'),
        components: path.resolve(__dirname, 'src/components/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        styles: path.resolve(__dirname, 'src/styles/'),
        lib: path.resolve(__dirname, 'src/lib/'),
        util: path.resolve(__dirname, 'src/lib/util/'),
        server: path.resolve(__dirname, 'src/lib/server'),
        svg: path.resolve(__dirname, 'src/images/svg/'),
        images: path.resolve(__dirname, 'src/images'),
        react: path.resolve(__dirname, 'node_modules/react/'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        'react-redux': path.resolve(
          __dirname,
          'node_modules/react-redux/lib/index.js'
        ),
        img: path.resolve(__dirname, 'src/images'),
      },
    },
    module: {
      noParse: /node_modules\/(moment|chart\.js)/, //不解析
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/, //排除
          include: [path.resolve(__dirname, 'src')], //包括
          loader: 'happypack/loader?id=babel',
        },
        {
          test: /\.css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                minimize: minimize[dev], //压缩
                sourceMap: minimize[dev],
              },
            },
          ],
        },
        {
          test: /\.(html)$/,
          use: {

            loader: 'html-loader',
            options: {
              attrs: [':data-src'], //为了做图片懒加载，那些属性需要被，制定什么属性被该loader解析
              minimize: false,
            },
          },
        },
        {
          test: /\.(png|jpg|gif|jpeg|ttf|svg)$/,
          exclude: /(node_modules|bower_components)/,
          include: [path.resolve(__dirname, 'src/images')],
          use: [
            {
              loader: 'url-loader?limit=8024', //limit 图片大小的衡量，进行base64处理
              options: {
                name: '[path][name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.styl/,
          exclude: /(node_modules|bower_components)/,
          include: [path.resolve(__dirname, 'src')],
          use: stylus[dev],
        },
        {
          test: /\.less/,
          use: [
            { loader: MiniCssExtractPlugin.loader },

            {
              loader: 'css-loader',
              options: {
                minimize: minimize[dev], //压缩
                sourceMap: minimize[dev],
              },
            },
            { loader: 'less-loader', options: { modifyVars: theme } },
          ],
        },
      ],
    },
    plugins: plugins[dev],
  };
};
