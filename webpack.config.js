const path = require ('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	// 入口
	entry:path.join(__dirname,'./src/main.js'),
	// 出口
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js' //输出的文件名称
	},
	plugins:[
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		})
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.(jpg|jpeg|png|gif)$/,use:'url-loader?limit=17,204&name=[hash:8]-[name].[ext]'},
			{test:/\.(svg|woff|woff2|ttf|eot)$/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			{test:/\.vue$/,use:'vue-loader'}
		]
	},
	resolve:{
		alias:{
			"vue$":"vue/dist/vue.js"
		}
	}
}