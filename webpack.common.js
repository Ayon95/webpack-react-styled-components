const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/images/[name][ext]',
		clean: true,
	},

	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},

			{
				test: /\.(png|jpe?g|svg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack demo',
			template: path.resolve(__dirname, './public/index.html'),
		}),
	],
};
