const HtmlWebpackPlugin = require("html-webpack-plugin");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const path = require("path");
const pkg = require("./package.json");

module.exports = {
  mode: "development",
  // output: {
  //   publicPath: "http://localhost:8080",
  // },
  entry: "./src/index.tsx",
  output: {
    // filename: "bundle.js",
    // path: path.resolve(__dirname, "./dist"),
    // clean: true,
    publicPath: "auto",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    // compress: false,
    port: 3000,
    // host: '0.0.0.0',
    // historyApiFallback: {
    //   index: "/index.html",
    // },
    // watchOptions: {
    //   poll: 1000,
    // },
    // devMiddleware: {
    //   index: "index.html",
    //   writeToDisk: true,
    // },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
        // include: path.resolve(__dirname, "./src"),
        exclude: /node_modules/,
      },
      // {
      //   test: /\.js$/,
      //   loader: "source-map-loader",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new FederatedTypesPlugin({
      federationConfig: {
        name: "users",
        filename: "remoteEntry.js",
        exposes: {
          "./usersModule": "./src/components/TodoList",
        },
        shared: [require("./package.json").dependencies],
      },
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", "jsx", ".js", "json"],
  },
};
