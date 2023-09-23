const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    option: './src/option-page/option.tsx',
    service_worker: './src/background/service-worker.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/option-page/index.html',
          to: path.join(__dirname, 'dist/option.html'),
        },
        {
          from: 'src/manifest.json',
          to: path.join(__dirname, 'dist/manifest.json'),
        },
        {
          from: 'src/images/',
          to: path.join(__dirname, 'dist/images'),
        },
      ],
    }),
  ],
  devtool: 'source-map',
  mode: 'none',
};
