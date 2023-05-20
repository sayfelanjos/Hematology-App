const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  name: "users",
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
    port: 3007,
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
    publicPath: "http://users-mf.info/",
    clean: true,
  },
  module: {
    rules: [
      {
        // exclude: /node_modules\/(?!@sayfelanjos).*/,
        exclude: /node_modules/,
        test: /\.jsx?$/,
        enforce: "pre",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          {
            loader: "source-map-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: "style-loader" },
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                auto: true,
                // exportGlobals: true,
                localIdentName: "[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
                // localIdentHashSalt: "my-custom-hash",
                // namedExport: true,
                // exportLocalsConvention: "camelCase",
                // exportOnlyLocals: false,
              },
            },
          },
          // Compiles Sass to CSS
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svg/webpack"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx", ".css", "scss"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "users",
      filename: "remoteEntry.js",
      exposes: {
        "./UsersModule": "./src/App",
      },
      remotes: {
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
  ],
};
