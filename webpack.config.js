module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader', 
				query: {
					presets: ['es2015'],
					plugins: ['add-module-exports', 'transform-object-assign']
				}
			}
		],
	},	
	output: {
		filename: 'all.js',
		library: 'MadScore',
		libraryTarget: 'umd'
	}
};
