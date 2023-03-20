import * as webpack from 'webpack';
import * as path from 'path';
import 'webpack-dev-server';
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    publicPath: ''
  },
  devServer: {
    compress: false,
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/index.html'
    }
  },
  // watchOptions: {
  //   poll: 1000,
  // },
  // static: {
  //   directory: path.resolve(__dirname, './dist')
  // },
  // devMiddleware: {
  //   index: 'index.html',
  //   writeToDisk: true
  // },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
};

export default config;