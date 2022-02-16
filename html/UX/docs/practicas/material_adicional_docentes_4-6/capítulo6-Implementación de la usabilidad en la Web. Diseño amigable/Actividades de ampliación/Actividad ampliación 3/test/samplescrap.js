//var phantom = require('phantom');
var page = require('webpage').create();
page.settings.userAgent = 'Mozilla Azul';
page.open('Any-url', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    //page.render('example.png'); page.content
    console.log('OK, we did it ' + page.content);
  } else {
    console.log('Problems grabbing page');
  }
  phantom.exit();
});
