const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devServer: {
		contentBase: baseWebpackConfig.externals.paths.dist,
		port: 3000,
		overlay: true
	}
})

module.exports = new Promise((resolve) => {
	resolve(devWebpackConfig)
})
