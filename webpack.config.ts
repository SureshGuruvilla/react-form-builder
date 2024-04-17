const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js', // Output filename with placeholders
    library: 'react-formez', // Specify the library name
    libraryTarget: 'umd', // Universal Module Definition
    umdNamedDefine: true,
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /(?:stories|node_modules)/,
      },
      {
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
            // MiniCssExtractPlugin.loader,
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                importLoaders: 1,
              },
            },
            'sass-loader'
          ],
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css',
    //   chunkFilename: '[name].[contenthash].css', // Specify the filename template for non-entry CSS chunks  
    //   }),
    // new HtmlWebpackPlugin({
    //   template: './public/index.html' // Path to your HTML template file
    // })
  ],
  optimization: {
    minimize: false,
    splitChunks: false, // Disable automatic splitting of chunks
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true, // Enable gzip compression for everything served
    port: 9000, // Specify a port number
    open: true, // Open the default browser when the server starts
    hot: true, // Enable hot module replacement
  },
};