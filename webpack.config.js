const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src', 'index.js'),
  build: path.join(__dirname, 'build'),
  index: path.join(__dirname, 'src', 'index.html'),
  styles: path.join(__dirname, 'src', 'index.scss')
};

const sourceMapDevTool = 'cheap-module-inline-source-map';

let config = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app,
    styles: PATHS.styles
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  devtool: sourceMapDevTool,
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.index
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: "file-loader",
              // Below are the fallback options
              name: "[name].[ext]",
              publicPath: "/images",
              outputPath: "images"
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
