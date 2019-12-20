const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: 'localhost',
    port: 3003,
    clientLogLevel: 'warning',
    open: true,
    hot: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    },
    progress: true
  }
}
