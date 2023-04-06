const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  name: "shell",
  mode: "development",
  context: path.join(__dirname, "./"),
  entry: "./src/index.js",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    historyApiFallback: true,
    compress: true,
    port: 80,
    host: "0.0.0.0",
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
