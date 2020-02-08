const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader' 
      },
      {
        test: /\.scss$/,
        use: [ 
          'style-loader', 
          'css-loader', 
          'sass-loader' 
        ] 
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HTMLWebPackPlugin({
      hash: true, 
      template: "./public/index.html",
    })
  ],
  devtool: 'cheap-module-eval-source-map'
}