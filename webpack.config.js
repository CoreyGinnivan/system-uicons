const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/css/tailwind.src.css",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  devServer: {
    static: "./dist",
    watchFiles: path.join(__dirname, "src"),
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    /// Enable images folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/images",
          to: "images",
        },
        {
          from: "src/js",
          to: "js",
        },
      ],
    }),
  ],
};
