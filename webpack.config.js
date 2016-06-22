var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: "./src/app.js",
    vendor: ["react","react-dom"]
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
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "#source-map",
  devServer: {
    hot: true,
    inline: true,
    contentBase: "build"
  }
};
