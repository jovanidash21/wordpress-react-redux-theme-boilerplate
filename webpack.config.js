'use strict';

var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.scss$/,
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.join(__dirname, '/assets/styles/common/_mixins.scss'),
            path.join(__dirname, '/assets/styles/common/_variables.scss')
          ]
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
