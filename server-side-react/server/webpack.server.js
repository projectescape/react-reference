const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack, building a bundle for nodejs, not browser
  target: 'node',
  // Tell webpack root file of app
  entry: './src/index.js',
  // tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Not bundle any library that exists in node_modules folder to the bundle.js
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
