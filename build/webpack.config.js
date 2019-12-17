const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const devWebpackConfig = require('./webpack.base.config')
const proWebpackConfig = require('./webpack.base.config')

module.exports = (env, argv) => {
  const config =
    argv.mode === 'development' ? devWebpackConfig : proWebpackConfig
  return merge(baseWebpackConfig, config)
}
