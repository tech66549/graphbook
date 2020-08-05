const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const buildDirectory = 'dist';
const outputDirectory = buildDirectory + '/client';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
       }, 'css-loader'],
      },

    ]
  }, 
  // devServer: {
  //   port: 3000,
  //   open: true
  // },
  plugins: [
    //new CleanWebpackPlugin([buildDirectory]),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    })
  ]
};
