const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
	devtool: 'source-map',
	entry: {
		index: [
			'./public/index.js',
		],
	},
	output: {
		path: path.resolve('./dist'),
		filename: '[name].js',
	},
	module: {
	    rules: [
		]
    },
    plugins: [
    	new webpack.optimize.UglifyJsPlugin({  //reduce size of bundle file
      		beautify: false,
      		comments: false,
			sourceMap: false,
      		compress: {
        		warnings: false,
      		},
    	}),
		new webpack.LoaderOptionsPlugin({
     		 minimize: true,
    	}),
       	new CleanWebpackPlugin(['./dist'], { root: process.cwd() }),
    ],
})