const webpack = require('webpack')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CompressionPlugin = require('compression-webpack-plugin')

const dist = path.resolve(__dirname, 'public')
const views = path.resolve(__dirname, 'app/views')
const components = path.resolve(__dirname, 'app/components')

module.exports = {
  entry: path.resolve(__dirname, 'app'),

  output: {
    path: dist,
    filename: '[hash].js'
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.scss', '.css' ],
    alias: {
      components: components,
      views: views
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loaders: [ 'html-loader' ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader', 'postcss-loader' ]
          }
        )
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(views, 'index.html'),
      favicon: path.resolve(views, 'favicon.png'),
      inject: true,
      minify: {}
    }),

    new webpack.optimize.UglifyJsPlugin(
      {
        sourceMap: true,
        compress: {
          warnings: false
        },
        comments: false
      }
    ),

    new ExtractTextPlugin('[hash].css'),

    new CompressionPlugin(
      {
        test: /\.js$|\.css$|\.html$/
      }
    ),

    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  devtool: 'cheap-module-source-map'
}
