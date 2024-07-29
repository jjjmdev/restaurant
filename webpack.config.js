const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "src/assets/images/[name][ext]",
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			inject: "body",
		}),
	],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},

			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
				type: "asset/resource",
			},
		],
	},
};
