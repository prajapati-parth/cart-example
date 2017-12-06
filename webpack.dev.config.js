var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',
  devtool: 'inline-source-map',
  
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    host: 'localhost',
    open: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|build)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
        }
      },
      {
        test: /(\.less|\.css)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}