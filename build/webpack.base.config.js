const HtmlWebpackPlugin = require('html-webpack-plugin') // 输出到页面
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    // 默认./dist
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  // 处理那些非 JavaScript 文件
  module: {
    rules: [
      {
        test: /\.ts?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true // 编译时不进行类型检查
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
}
