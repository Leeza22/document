const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = (relativePath) => path.resolve(process.cwd(), relativePath)
module.exports = {
  mode: 'development',
  entry: './ccc.js',
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test'
    })
  ]
}