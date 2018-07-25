let path = require('path'),
  fs = require('fs'),
  webpack = require('webpack');

let vendors = ['react', 'react-dom'];

module.exports = {
  entry: {
    vendor: vendors,
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: 'Dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dll', 'manifest.json'),
      name: '[name]_[hash]',
      context: __dirname,
    }),
  ],
};
