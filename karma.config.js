var argv = require('yargs').argv;
var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: !argv.watch, // just run once by default
    frameworks: ['jasmine'],
    // npm i karma-spec-reporter --save-dev
    // displays tests in a nice readable format
    reporters: ['spec'],

    // include some polyfills for babel and phantomjs
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/**/*.spec.js' // specify files to watch for tests
    ],
    preprocessors: {
      // these files we want to be precompiled with webpack
      // also run tests throug sourcemap for easier debugging
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/**/*.jsx': ['webpack', 'sourcemap'],
      'test/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: {
       devtool: 'inline-source-map',
       resolve: {
        // allow us to import components in tests like:
        // import Example from 'components/Example';
        root: path.resolve(__dirname, './src'),

        // allow us to avoid including extension name
        extensions: ['', '.js', '.jsx', '.json'],

        // required for enzyme to work properly
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      module: {
        // don't run babel-loader through the sinon module
        noParse: [
          /node_modules\/sinon\//
        ],
        // run babel loader for our tests
        loaders: [
          { test: /\.css$/, loader: "style!css" },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)\//,
            loader: 'babel',
            query: {
              presets: ['react','es2015']
            }
          },
          { test: /\.png$/, loader: "url-loader?limit=100000" },
          { test: /\.json$/, loader: 'json'}
        ],
      },
      // required for enzyme to work properly
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      },
    },
    webpackMiddleware: {
      noInfo: true
    },
    // tell karma all the plugins we're going to be using
    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    babelPreprocessor: {
      options: {
        presets: ['react', 'es2015']
      }
    }
  });
};
