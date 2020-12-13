// shared config (storybook and webpack)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpeg|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'assets/images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.(gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          }
        ]
      }
    ],
  },
};
