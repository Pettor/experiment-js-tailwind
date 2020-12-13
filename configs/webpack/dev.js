const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  entry: {
    app: './Index.tsx'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true, // enable HMR on the server
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ]
});
