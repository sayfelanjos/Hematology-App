import * as path from 'path';
import * as webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  entry: './src/app.ts',
  mode: "production",
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  }
};

export default config;