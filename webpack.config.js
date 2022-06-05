
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = (env, argv) => {
  return {
  entry: `${path.resolve(__dirname, "./src")}/index.tsx`, 
  output: {
    path: path.join(__dirname, "/dist"), // 번들링 결과 위치
    filename: "bundle.js", //  번들링된 파일명
  },
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
        {
            test: /\.(ts|tsx)?$/, // 어떤 파일을 변환할지
            exclude: /node_modules/,
            use: ["ts-loader"], // 어떤 loader를 사용할지
        },
        {
            test: /\.(js|jsx)?$/, // 어떤 파일을 변환할지
            exclude: /node_modules/,
            use: ["babel-loader"], // 어떤 loader를 사용할지
        }
    ],
  },
  devServer: {
    hot: true,
    port: 3000,
  }, // 
  plugins: [
    new HtmlWebpackPlugin({ // html 파일에 웹팩으로 빌드한 번들링 파일을 자동으로 추가해주느 plugon
        template: "./public/index.html", // html 파일이 위치하는 경로
      }),
    new webpack.ProvidePlugin({ // 자주 사용하는 모듈을 미리 등록
      React: "react",
    }),
    new webpack.HotModuleReplacementPlugin(), // webpack-dev-server 사용을 위한 플러그인
    new CleanWebpackPlugin(), // 빌드할때 마다 dist 폴더를 삭제한 다음 다시 생성
  ],
  }
};