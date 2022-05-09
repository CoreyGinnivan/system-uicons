const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/css/tailwind.src.css",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 2 } },
            "postcss-loader",
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {
      disable: process.env.NODE_ENV === "development",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    /// Enable images folder
    new CopyWebpackPlugin([
      {
        from: "src/images",
        to: "images",
      },
    ]),
    /// Enable js folder
    new CopyWebpackPlugin([
      {
        from: "src/js",
        to: "js",
      },
    ]),
  ],
};
