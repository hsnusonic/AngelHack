const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.resolve("src"),
	entry:{
		bundle: "app"
	},
	output:{
		path: path.resolve("dist"),
		filename: "js/[name].js",
	},
	devServer:{
		stats:{
			hash:         false,
			version:      false,
			timings:      true,
			assets:       true,
			chunks:       false,
			chunkModules: false,
			modules:      false,
			cached:       false,
			reasons:      false,
			source:       false,
			errorDetails: true,
			chunkOrigins: false,
			color: true,
		}
	},
	resolve:{
		root: [
			path.resolve("src"),
			path.resolve("src/css"),
			path.resolve("src/css/sass"),
			path.resolve("src/img"),
			path.resolve("src/components"),
			path.resolve("src/components/page"),
			path.resolve("node_modules")
		],
		extensions:["",".js",".jsx"]
	},
	resolveLoader:{
		root: path.resolve("node_modules")
	},
	devtool: "cheap-eval-source-map",
	module:{
		loaders:[{
			test: /\.(jsx?)$/,
			loader: "babel?presets[]=react&presets[]=es2015",
			include: path.resolve("src")
		}, {
			test: /\.sass$/,
		    loader: ExtractTextPlugin.extract("style", "css?url=false&sourceMap!sass?sourceMap")
		}, {
			test: /\.(png|jpg|html|ttf|eot|svg|otf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: "file?name=[path][name].[ext]"
		}]
	},
	plugins: [
        new ExtractTextPlugin("css/main.css")
    ]
};
