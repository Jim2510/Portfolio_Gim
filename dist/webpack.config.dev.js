"use strict";

var path = require('path');

module.exports = {
  module: {
    rules: [// ... altre regole ...
    // Regola per includere il file scrollreveal.min.js nel bundle
    {
      test: require.resolve('scrollreveal'),
      loader: 'expose-loader',
      options: {
        exposes: ['ScrollReveal']
      }
    }]
  },
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};