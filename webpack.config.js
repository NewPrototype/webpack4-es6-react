const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');   //html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩
const ExtendedDefinePlugin = require('extended-define-webpack-plugin');  //全局变量

const HappyPack = require('happypack'); //多线程运行

const { argv } = process;
let env = 'development'; //默认是开发模式
argv.forEach(v => {
  if (v == 'production') {
    env = 'production';
  }
});

const configDev = {
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,   //源html
      inject: 'body',
      filename: 'index.html',   //输出后的名称
      hash: true, //为静态资源生成hash值
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id][hash].css',
    }),
    new ExtendedDefinePlugin({
      __LOCAL__: true,
    }),

    new HappyPack({
      id: 'babel',   //对于loaders id
      loaders: ['babel-loader?cacheDirectory'],  //是用babel-loader解析
    }),
  ],
};
const configPro = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React scratch',
      template: `${__dirname}/src/index.html`,
      inject: 'body',
      filename: 'index.html',
      hash: true, //为静态资源生成hash值
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id][hash].css',
    }),
    new UglifyJsPlugin({ sourceMap: true }), //压缩，生成map
    new ExtendedDefinePlugin({
      __LOCAL__: false,
    }),

    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory'],
    }),
  ],
};
const config = env == 'development' ? configDev : configPro;
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9999,
    historyApiFallback: true,
  },
  devtool: env == 'development' ? 'cheap-eval-source-map' : 'source-map',
  performance: {
    maxEntrypointSize: 10000,
    maxAssetSize: 10000,
    hints: false,
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[id].[hash].js',
    chunkFilename: '[id][hash].js',
    publicPath: '/',
  },
  resolve: {
    mainFields: ['jsnext:main', 'browser', 'main'],   //npm读取先后方式
    alias: {
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      sources: path.resolve(__dirname, 'src/sources/'),
      stores: path.resolve(__dirname, 'src/stores/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      config:
        path.resolve(__dirname, 'src/config/') + process.env.REACT_WEBPACK_ENV,
      lib: path.resolve(__dirname, 'src/lib/'),
      util: path.resolve(__dirname, 'src/lib/util.js'),
      server: path.resolve(__dirname, 'src/lib/server'),
      dingApi: path.resolve(__dirname, 'src/lib/dingApi.js'),
      'react/lib/ReactMount': 'react-dom/lib/ReactMount',
      svg: path.resolve(__dirname, 'src/images/svg/'),
      images: path.resolve(__dirname, 'src/images'),
      react: path.resolve(__dirname, 'node_modules/react/'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'react-redux': path.resolve(
        __dirname,
        'node_modules/react-redux/lib/index.js'
      ),
      'antd-mobile': path.resolve(__dirname, 'node_modules/antd-mobile'),  //快捷方式
    },
  },
  module: {
    noParse: /node_modules\/(moment\.js)/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve(__dirname, 'src')],
        // use: ['babel-loader?cacheDirectory'],
        loader: 'happypack/loader?id=babel',
      },
      {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        // include: [path.resolve(__dirname, 'src')],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              minimize: env == 'development',
              sourceMap: env == 'development',
            },
          },
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
            minimize: env == 'development',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|jpeg|ttf|svg)$/,
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'url-loader?limit=81920',
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
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'stylus-loader' },
        ],
      },
    ],
  },
  plugins: config.plugins,
};
