const HtmlWebpackPlugin = require('html-webpack-plugin') // 输出到页面
const path = require('path')

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
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
