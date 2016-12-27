/* var debug = process.env.NODE_ENV !== "production";*/

var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "inline-sourcemap",
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "client.min.js"
  },
  plugins: [
    HTMLWebpackPluginConfig,
    /* new webpack.optimize.DedupePlugin(),
     * new webpack.optimize.OccurenceOrderPlugin(),
     * new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),*/
  ],
};
