const webpack = require('webpack')

module.exports = {
  webpack: (config, options) => {
    const {plugins} = config
    plugins.push(new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(require('./package.json').version)
    }))

    return config
  }
}
