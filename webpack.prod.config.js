var path = require ('path');
var buildPath = path.join(__dirname, 'build');
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0']
				}
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
			},
			{
				test: /\.html$/,
				loader: 'nunjucks-loader'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	entry: {
		'main': './src/app/index.js'
	},
	output: {
		path: buildPath,
		filename: '[name].js',
		library: 'page',
		libraryTarget: 'var'
	}
};