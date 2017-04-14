//webpack中的配置
var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry:  {
		app: ["./app/main.js"]
	},//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/public",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},

	devServer: {
	    contentBase: "./public",//本地服务器所加载的页面所在的目录
	    //colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新,
	    hot: true//热插拔
	},

	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
		        test: /\.css$/,
		        loader: 'style-loader!css-loader?modules'//添加对样式表的处理
		    }
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()//热加载插件
	]
}