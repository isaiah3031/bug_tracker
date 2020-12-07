var path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './app/javascript/packs/bug_tracker.jsx',
    './frontend'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
};
