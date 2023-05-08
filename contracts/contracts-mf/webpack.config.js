const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  name: "contracts",
  context: path.join(__dirname, "./"),
  entry: "./src/index.jsx",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
<<<<<<< HEAD
=======
    webSocketServer: false,
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    compress: true,
    port: 3006,
    host: "0.0.0.0",
    hot: true,
    allowedHosts: "all",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules\/(?!@sayfelanjos).*/,
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
<<<<<<< HEAD
=======
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
        test: /\.svg$/,
        use: ["@svg/webpack"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "contracts",
      library: { type: "var", name: "contracts" },
      filename: "remoteEntry.js",
      exposes: {
        "./ContractsModule": "./src/App.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
    }),
  ],
};
