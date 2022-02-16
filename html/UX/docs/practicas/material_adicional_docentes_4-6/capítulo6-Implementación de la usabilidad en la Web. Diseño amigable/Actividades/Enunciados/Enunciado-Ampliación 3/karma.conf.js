//       '*!(.module|.spec).js',
//      '!(node_modules)/**/*!(.module|.spec).js'

module.exports = function(config) {
  config.set({
 basePath: '',
//    files: [
//      'node_modules/angular/angular.js',
//      'node_modules/angular-animate/angular-animate.js',
//      'node_modules/angular-resource/angular-resource.js',
//      'node_modules/angular-route/angular-route.js',
//      'node_modules/angular-mocks/angular-mocks.js',
//      '**/*.module.js',
//      'test/*.spec.js',
//      'controller.js',
//      'services.js'
//],
    files: [
        { pattern: 'node_modules/angular/angular.js', watched: false },
        { pattern: 'node_modules/angular-resource/angular-resource.js', watched: false },
        { pattern: 'node_modules/angular-route/angular-route.js', watched: false },
        { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false },
      'public/js/app.js',
      'public/js/controller.js',
      'public/js/services.js',
      //{pattern: 'test/unit/*.spec.js', watched: true, served: true, included: true}
      'test/*.spec.js'
     ],
   autoWatch: true,

    frameworks: ['jasmine'],

    //browsers: ['Firefox'], //['Chrome','Firefox']
    browsers: ['PhantomJS', 'PhantomJS_custom'],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
],

    // you can define custom flags
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  });
};