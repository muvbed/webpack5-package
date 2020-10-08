const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/'
}

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: PATHS.src
	},
	output: {
		filename: 'js/[name].[hash].js',
		path: PATHS.dist,
		publicPath: ''
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node-modules'
		}, {
			test: /\.vue$/,
			use: {
				loader: 'vue-loader',
				options: {
					loader: {
						scss: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			}
		}, {
			test: /\.(png|jpg|gif|svg)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: '../img',
					esModule: false
				}
			}
		}, {
			test: /\.scss$/,
			use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
		}, {
			test: /\.css$/,
			use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
		}]
	},
	resolve: {
		alias: {
			'@': PATHS.src,
			'vue$': 'vue/dist/vue.js'
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${PATHS.src}/${PATHS.assets}img`,
					to: 'img'
				},
				{
					from: `${PATHS.src}/static`,
					to: ''
				}
			]
		}),
		new HtmlWebpackPlugin({
			hash: false,
			minify: false,
			template: `${PATHS.src}/index.html`,
			filename: './index.html'
		})
	]
}
