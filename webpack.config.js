var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var nested = require('postcss-nested');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: APP_PATH
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      }
    ]
  },
  postcss: function() {
    return [
      nested(),
      autoprefixer({ browsers: ['ie >= 8', 'last 2 versions', '> 2%'] })
    ];
  },
  plugins: [
    new HtmlwebpackPlugin({ title: 'German National Visa status check' })
  ]
};

if (TARGET == 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      port: 8083,
      progress: true
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
  });
}
