const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
	devtool: 'eval-source-map',
	entry: {
		index: [
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./public/index.js',
		],
	},
	output: {
		filename: '[name].js',
	},
	module: {
	    rules: [
		]
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NamedModulesPlugin(),
  	],
  	devServer: {
  		hot: true,
  		contentBase: '/',
  		port: 3000  //set reload port
  	},
});