// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*spec.js'],
  capabilities: {
   browserName: 'firefox',
 }
}
