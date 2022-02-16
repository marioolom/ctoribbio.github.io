# Angular CRUD sample
This is an angular v1 crud operations sample

# Actividad ampliación 3
## Instalación
Requiere Node.js
```
npm install
```
Then protractor globally
```
npm install -g protractor
```

Then update webdriver-manager:
```
webdriver-manager update
```

# Testing:
[http://www.protractortest.org/#/tutorial]

# Running
You need to run THREE consoles with:
1. Selenium
```
webdriver-manager start
```
2. A local http server
```
node node_modules/.bin/http-server
```
Or using npm:
```
npm run start
```

3. And then test with protractor:
```
protractor test/protractor-conf.js
```
Or run npm task
```
npm run test
```

# phantomjs
When you change to phantomjs, install
```
npm install --save-dev phantomjs
```

In the conf.js set these lines:
```
   browserName: 'phantomjs',
   'phantomjs.binary.path': require('phantomjs').path,
```

The second is required to locate the binary of
phantomjs


# Notes
 Moved this line to travis.yml, and now it works
    //"pretest": "./node_modules/.bin/webdriver-manager update && ./node_modules/.bin/webdriver-manager start &; sleep 5 && echo OK ready && ./node_modules/.bin/http-server &",

