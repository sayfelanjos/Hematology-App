const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  name: "shell",
  mode: "development",
  cache: true,
  target: "web",
  context: path.join(__dirname, "./"),
  entry: "./src/index",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    webSocketServer: false,
    historyApiFallback: true,
    compress: true,
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: "all",
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "http://shell-mf.info/",
    clean: true,
  },
  module: {
    rules: [
      {
        // exclude: /node_modules\/(?!@sayfelanjos).*/,
        exclude: /node_modules/,
        test: /\.jsx?$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
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
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svg/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".css", ".scss"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      filename: "remoteEntry.js",
      remotes: {
        orders: `orders@http://orders-mf.info/remoteEntry.js`,
        invoices: `invoices@http://invoices-mf.info/remoteEntry.js`,
        supplies: `supplies@http://supplies-mf.info/remoteEntry.js`,
        statistics: `statistics@http://statistics-mf.info/remoteEntry.js`,
        customers_and_suppliers: `customers_and_suppliers@http://customers-and-suppliers-mf.info/remoteEntry.js`,
        users: `users@http://users-mf.info/remoteEntry.js`,
        contracts: `contracts@http://contracts-mf.info/remoteEntry.js`,
        store: `store@http://store.info/remoteEntry.js`,
      },
      shared: {
        ...deps,
        react: {
          eager: true,
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
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
};
