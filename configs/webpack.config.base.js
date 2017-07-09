const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
	    rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: [/node_modules/]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader'],
				}),
			},
            {
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
				}),
				exclude: [/node_modules/]
			},
			{
				test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
            	use: 'file-loader'
			},
			{
		        test: /\.(woff|woff2|eot|ttf|svg)$/,
		        use: 'url-loader'
		    },
		    {
                test: /\.json$/,
                use: 'json-loader'
            }
		],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
		}),
		new HtmlWebpackPlugin({
    		template: './index.html',
    	}),
		new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       	}),
    ],
}