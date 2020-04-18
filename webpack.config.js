const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // development mode

  entry: "./src/index.js", // entry 는 src의 index.js

  output: {
    path: path.resolve(__dirname, "./"), // 번들링된 파일 루트에 생성
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader", // 로더를 이용해 바벨을 적용
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", // 로더를 이용해 html 적용
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      filename: path.join(__dirname, "./index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  optimization: {
    minimize: true,
  },
  devServer: {
    contentBase: path.join(__dirname, "./"), // 이 경로에 있는 파일이 변경될 때 번들을 다시 컴파일
    compress: true,
    port: 3002,
  },
};
