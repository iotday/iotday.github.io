var path = require ('path');
var devPath = path.join(__dirname, 'dev');

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
				loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.html$/,
				loader: 'nunjucks-loader'
			}
		]
	},
	entry: {
		'main': './src/app/index.js'
	},
	output: {
		path: devPath,
		filename: '[name].js',
		libraryTarget: 'amd'
	}
};