var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.min.js',
    libraryTarget: 'umd'
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
  },

  plugins: [
    new webpack.DefinePlugin({
        "process.env": { 
            NODE_ENV: JSON.stringify("production") 
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      output: {
          comments: false,
      },
    })
  ]
}