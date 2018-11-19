const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		//"vendors": ["vue", "vue-router", "vuex", "element-ui"],
		"boundle": './src/main.js',
	},
	output: {
		path: path.resolve(__dirname, '../asset'),
		chunkFilename: '[name].[chunkhash].js',
		filename: '[name].[hash].js'
	},
	resolve: {
		/* 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在 */
		extensions: ['.js', '.vue', '.json'],
		/* 配置项通过别名来把原导入路径映射成一个新的导入路径 */
		alias: {
			'@': path.resolve(__dirname, '../src/pages/'),
			'static': path.resolve(__dirname, '../static'),
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				// options: {
				// 	loaders: {
				// 		css: ExtractTextPlugin.extract({
				// 			use: ["style-loader", 'css-loader'],
				// 			fallback: 'vue-style-loader'
				// 		})
				// 	}
				// }
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				// loader: ExtractTextPlugin.extract({
				// 	fallback: "style-loader",
				// 	use: "css-loader"
				// }),
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		//new ExtractTextPlugin('css/style.css'),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true,
			title: '基于vue的备忘录的实现'
		}),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				// 将node_modules内的代码块统一打包
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
		runtimeChunk: {
			name: "manifest"
		}
	},
	devServer: {
		contentBase: path.join(__dirname, "../"),
		hot: true
	},
	mode: 'development'

}