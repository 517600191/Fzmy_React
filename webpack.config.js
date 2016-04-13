var path = require('path');
var webpack = require("webpack");
module.exports = {
 entry: [
 	'webpack/hot/dev-server',
    'webpack-dev-server/client?http://127.0.0.1:8080',
 	path.resolve(__dirname,'app/main.js'),
 ],
 output:{
    path: path.resolve(__dirname,'build'),
    filename:"bundle.js"
 },
 resolve: {
        extensions: ['', '.js', '.jsx']
 },
 plugins: [
    new webpack.HotModuleReplacementPlugin()
 ],
 module: {
    loaders: [
        { 
        	test: /\.js|jsx$/,exclude: /node_modules/, 
        	loader: ['babel'],
        	query: {presets: ['es2015', 'react']},
        }
    ]
 },
 state:{
 	colors:true
 },
 devtool: 'source-map'
}
