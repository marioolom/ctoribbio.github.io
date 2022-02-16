# Diseño de Interfaces
## Capítulo 6
Testing e2e con Protractor
Angular v1 crud operations sample

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
You need to run TWO consoles with:

1. A local http server
```
node node_modules/.bin/http-server
```
Or using npm:
```
npm run start
```

2. And then test with protractor:
```
protractor test/protractor-conf.js
```
Or run npm task
```
npm run test
```