const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    libraryExport: 'default',
    library: 'Assets',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  externals: {
    react: {
      'commonjs': 'react',
      'commonjs2': 'react',
      'umd': 'react'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'umd': 'react-dom'
    },
    'react-router-dom': {
      'commonjs': 'react-router-dom',
      'commonjs2': 'react-router-dom',
      'umd': 'react-router-dom'
    },
  },
};