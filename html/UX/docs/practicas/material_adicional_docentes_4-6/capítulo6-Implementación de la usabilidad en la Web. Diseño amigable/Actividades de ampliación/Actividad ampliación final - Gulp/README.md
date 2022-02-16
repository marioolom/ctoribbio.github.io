# Diseño de Interfaces
## Capítulo 6  - Actividad ampliación final
Testing e2e con Protractor
Angular Contact sample

## Ejecución


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
Make sure that gulp is installed

# Testing:
[http://www.protractortest.org/#/tutorial]

# Building
```
gulp
```
# Running tests
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