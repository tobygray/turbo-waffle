const path = require('path');

var mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode: mode,
  entry: {
    main: './src/main.js',
  },
  devtool: (mode === 'development') ? 'inline-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: '[name].bundle.js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};
