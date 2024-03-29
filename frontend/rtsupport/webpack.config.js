module.exports = {
	entry: __dirname + '/index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
}