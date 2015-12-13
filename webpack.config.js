module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015' // 'babel-loader' is also a legal name to reference
      }
    ]
  }
};