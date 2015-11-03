var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var webpackClean = require('clean-webpack-plugin');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nested = require('postcss-nested');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var VENDOR_LIBS = [
  'classnames',
  'isomorphic-fetch',
  'react',
  'react-dom',
  'react-redux',
  'redux',
  'redux-thunk'
];

var common = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
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
  }
};

if (TARGET === 'start' || !TARGET) {
  module.exports = webpackMerge(common, {
    entry: [
      'webpack-hot-middleware/client',
      APP_PATH
    ],
    output: {
      path: BUILD_PATH,
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css', 'postcss'],
          include: APP_PATH
        }
      ]
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  });
}
else if (TARGET === 'build') {
  module.exports = webpackMerge(common, {
    entry: {
      app: APP_PATH,
      vendor: VENDOR_LIBS
    },
    output: {
      path: BUILD_PATH,
      filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss'),
          include: APP_PATH
        }
      ]
    },
    plugins: [
      new webpackClean([BUILD_PATH]),
      new ExtractTextPlugin('styles.[chunkhash].css'),
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        '[name].[chunkhash].js'
      ),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify('production') }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ]
  });
}

