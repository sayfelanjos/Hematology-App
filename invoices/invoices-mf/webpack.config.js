const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  name: "invoices",
  mode: "development",
  context: path.join(__dirname, "./"),
  entry: "./src/index.js",
  devServer: {
<<<<<<< HEAD
    static: { directory: path.join(__dirname, "public") },
    historyApiFallback: true,
=======
    bonjour: true,
    client: {
      progress: true,
      // logging: "info",
    },
    static: { directory: path.join(__dirname, "public") },
    historyApiFallback: true,
    webSocketServer: false,
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
    compress: true,
    port: 3003,
    host: "0.0.0.0",
    allowedHosts: "all",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
<<<<<<< HEAD
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        exclude: /node_modules\/(?!@sayfelanjos).*/,
=======
    publicPath: "http://invoices-mf.info/",
    clean: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        exclude: /node_modules/,
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
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
<<<<<<< HEAD
=======
          "postcss-loader",
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)
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
      name: "invoices",
      filename: "remoteEntry.js",
      exposes: {
        "./InvoicesModule": "./src/App",
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
  ],
};
