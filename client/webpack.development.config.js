const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const dist = path.resolve(__dirname, 'public')
const views = path.resolve(__dirname, 'app/views')
const components = path.resolve(__dirname, 'app/components')

module.exports = {
  entry: path.resolve(__dirname, 'app'),

  output: {
    path: dist,
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json', '.scss', '.css' ],
    alias: {
      components: components,
      views: views
    }
  },

  devServer: {
    contentBase: dist,
    watchContentBase: true,
    historyApiFallback: true,
    compress: true,
    port: 3000
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
        loaders: [ 'style-loader', 'css-loader', 'sass-loader', 'postcss-loader' ]
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
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(views, 'index.html'),
      favicon: path.resolve(views, 'favicon.png'),
      inject: true,
      minify: false,
      hash: true
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  devtool: 'eval-cheap-module-source-map'
}
