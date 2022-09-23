***
# Test assignment for Lincoln Labs

## 1. Installation

To install application with all dependencies run:

```
$ npm install
```

## 2. App running

To run application in browser type following command in terminal:
```
$ gulp
```

The local server will run on: http://localhost:3000

## 3. Gulp tasks

````
exports.browsersync = browsersync;
exports.assets = series(cleanimg, styles, scripts, images);
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.cleanimg = cleanimg;
exports.default = parallel(images, styles, scripts, browsersync, startwatch);
````