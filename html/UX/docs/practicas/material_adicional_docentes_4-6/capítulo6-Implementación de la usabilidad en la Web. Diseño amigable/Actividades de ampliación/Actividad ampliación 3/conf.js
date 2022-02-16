exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*spec.js'],
    capabilities: {
    //browserName: 'firefox',
   //browserName: 'chrome',
   browserName: 'phantomjs',
   'phantomjs.binary.path': require('phantomjs').path,
 }
};

/*
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*spec.js'],
  capabilities: {
   browserName: 'firefox',
 }
*/
