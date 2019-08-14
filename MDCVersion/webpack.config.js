function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
      }
    },
  ];
}

module.exports = [
  {
    entry: './scss/style.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /style.scss$/,
        use: getStyleUse('./assets/style-bundle.css')
      }]
    },
  },
  {
    entry: "./js/index.js",
    output: {
      filename: "./assets/bundle.js"
    },
    module: {
      loaders: [{
        test: /index.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
];
