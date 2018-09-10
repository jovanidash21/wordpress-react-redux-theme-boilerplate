'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSassBundle = new ExtractTextPlugin({
  filename: 'bundle.css',
  disable: false,
});

module.exports = {
  entry: [
    './src/index.js',
  ],
  plugins: [
    extractSassBundle,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                postcssFlexbugsFixes,
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: extractSassBundle.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  postcssFlexbugsFixes,
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9',
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  path.join(__dirname, '/bower_components/bootstrap/scss/_functions.scss'),
                  path.join(__dirname, '/bower_components/bootstrap/scss/_variables.scss'),
                  path.join(__dirname, '/bower_components/bootstrap/scss/_mixins.scss'),
                  path.join(__dirname, '/assets/styles/common/_variables.scss'),
                  path.join(__dirname, '/assets/styles/common/_mixins.scss'),
                ],
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/dist/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
