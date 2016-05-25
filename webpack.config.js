var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: "./src/index.jsx",
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          //cacheDirectory: true,
          presets: ['react', 'es2015']
        },
        include: [path.resolve(__dirname,"src")]
      }
    ]
  }
};
