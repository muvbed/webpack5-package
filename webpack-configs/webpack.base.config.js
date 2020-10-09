const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')
const fs = require('fs')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets'
}

const ENTRIES_DIR = `${PATHS.src}/js`
const PAGES_DIR = `${PATHS.src}/layouts`

const ENTRIES_FILES = fs.readdirSync(ENTRIES_DIR).filter(fileName => fileName.endsWith('.js'))
const PAGES_FILES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'))

const ENTRIES = {}

for (let item of ENTRIES_FILES) {
	ENTRIES[item.replace(/\.js/, '')] = `${ENTRIES_DIR}/${item}`
}

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: ENTRIES,
	output: {
		filename: 'js/[name].js',
		path: PATHS.dist
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all'
				}
			}
		}
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
			test: /\.(png|jp(e)?g|gif|svg)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '../img',
					outputPath: 'img'
				}
			}
		}, {
			test: /\.(ttf|woff(2)?)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '../fonts',
					outputPath: 'fonts'
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
			'vue': 'vue/dist/vue.js'
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${PATHS.src}/${PATHS.assets}/img`,
					to: 'img/[name].[ext]'
				},
				{
					from: `${PATHS.src}/${PATHS.assets}/fonts`,
					to: 'fonts/[name].[ext]'
				},
				{
					from: `${PATHS.src}/static`,
					to: '[name].[ext]'
				}
			]
		}),
		...PAGES_FILES.map(page => new HtmlWebpackPlugin({
			template: `${PAGES_DIR}/${page}`,
			filename: `./${page}`,
			minify: false,
			inject: false
		}))
	]
}
