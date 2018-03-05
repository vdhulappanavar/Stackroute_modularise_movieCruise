const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch : true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: "/node_modules/"
  }
};