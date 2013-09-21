/*!
 * Module dependencies.
 */

var async = require('async')

/**
 * Controllers
 */

var home = require('../app/controllers/home')

/**
 * Expose items
 */

module.exports = function (app) {

  // home route
  app.get('/', home.index);
  app.get('/home/getplaces', home.getplaces);

}
