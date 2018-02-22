module.exports = {
	entry: [
	'./project/timer.js'],

	output: {
	path: __dirname + "/dist/js",
	filename: 'compiled.js'
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};