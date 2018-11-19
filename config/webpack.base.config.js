const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output:{
  	path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
		rules: [
			{
		      test: /\.vue$/,
			  	loader: 'vue-loader',
			}
	  ]
	},
	plugins:[
  	new VueLoaderPlugin()
  ],
	mode: 'development'
}