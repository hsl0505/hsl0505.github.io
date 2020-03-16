const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // development mode

  entry: "./src/index.js", // entry 는 src의 index.js

  output: {
    path: path.resolve(__dirname, "./"), // 번들링된 파일 /build에 생성
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader", // 로더를 이용해 바벨을 적용
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader", // 로더를 이용해 html 적용
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./index.html`,
      filename: "index.html"
    })
  ],
  optimization: {
    minimize: true
  }
};
