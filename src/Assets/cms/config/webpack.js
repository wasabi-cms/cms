const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#source-map',
  entry: {
    tree: './src/index.js',
    vendor: [
      'axios',
      'crypto-js',
      'es6-promise',
      'moment',
      'sortablejs',
      'uuid',
      'v-tooltip',
      'vue',
      'vue-sortable',
      'vue2-touch-events',
      'vuedraggable',
      'vuex'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  performance: {
    hints: false
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        enforce: 'pre',
        test: /.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          buble: {
            objectAssign: 'Object.assign',
          },
          preserveWhitespace: false,
          loaders: {
            scss: ExtractTextPlugin.extract({
              use: 'css-loader?-url!sass-loader',
              fallback: 'vue-style-loader' // <- this is a dep of vue-loader
            })
          },
          postcss: [require('autoprefixer')()]
        }
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // extract css
    new ExtractTextPlugin('tree.css')
  ]
};
