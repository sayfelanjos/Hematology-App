import * as path from 'path';
import * as webpack from 'webpack';
import webpackNodeExternals from 'webpack-node-externals';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';

const config: webpack.Configuration = {
  entry: './src/app.ts',
  mode: "development",
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
    clean: true
  },
  // watch: true,
  // watchOptions: {
  //   poll: 10
  // },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd:{
        scripts: [
          'nodemon ./dist/app.js'
        ],
        blocking: false,
        parallel: true
      }
    })
  ]
};

export default config;