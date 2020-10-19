const DotenvPlugin = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [new DotenvPlugin()],

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
}
