const path = require('path');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      }
    },
    {
      test: /\.s[ac]ss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};
