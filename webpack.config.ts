const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js", // Output filename with placeholders
    library: "react-formez", // Specify the library name
    libraryTarget: "umd", // Universal Module Definition
    umdNamedDefine: true,
    globalObject: "this",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /(?:stories|node_modules)/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /\.module\.scss$/, // Exclude SCSS module files
      },
      {
        test: /\.module\.s[ca]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
                namedExport: false,
              },
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
    splitChunks: false, // Disable automatic splitting of chunks
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true, // Enable gzip compression for everything served
    port: 9000, // Specify a port number
    open: true, // Open the default browser when the server starts
    hot: true, // Enable hot module replacement
  },
};
