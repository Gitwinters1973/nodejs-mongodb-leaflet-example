
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
    db: 'mongodb://localhost/nodejs-mongodb-leaflet-example',
    root: rootPath,
    app: {
      name: 'nodejs-mongodb-leaflet-example'
    }
  },
  test: {
    db: 'mongodb://localhost/nodejs-mongodb-leaflet-example',
    root: rootPath,
    app: {
      name: 'nodejs-mongodb-leaflet-example'
    }
  },
  production: {}
}