# Diseño de Interfaces
## Capítulo 6
Testing e2e con Protractor

## Instalación
Requiere Node.js
```
npm install
```
# Angular CRUD sample
This is an angular v1 crud operations sample

# Testing:
[http://www.protractortest.org/#/tutorial]

# Install
Nothing is needed, as I didn't use any npm, bower, ...

You could run it directly and locally in Firefox.

# http server

```
node node_modules/.bin/http-server
```
Or using npm:
```
npm run start
```

## notes for me
Tagging after commit
```
git tag -a v1.0 1fba14
```

Then push it
```
git push origin v1.0
```

Then get version with:
```
git pull origin v1.0
```
# Start the test:
```
webdriver-manager start
```
And then test:
```
protractor conf.js
```
Or run npm task
```
npm run test
```
   // "test": "node node_modules/karma/bin/karma start test/karma.conf.js",