import * as webpack from 'webpack';
import * as path from 'path';
import 'webpack-dev-server';
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
      },
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