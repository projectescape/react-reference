module.exports = {
  // Tell webpack to run babel in every file
  module: {
    rules: [
      {
        // include all js files
        test: /\.js?$/,
        loader: 'babel-loader',
        // exclude folder
        exclude: /node_modules/,
        options: {
          presets: [
            // react for jsx to javascript/html
            'react',
            // handling async code later on
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};
