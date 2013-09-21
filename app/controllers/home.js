
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Item = mongoose.model('Item')

/**
 * Items
 */

/**
 * Render index page
 */
exports.index = function(req, res){
  var options = {}
  Item.find(options, function(err, items) {
    if (err) return res.render('500')
      res.render('home/index', {
        title: 'nodejs-mongodb-leaflet-example',
    })
  })  
}

/**
 * In the home page all crags are on a map as marker
 * An Ajax call tell node.js to query by location mongodb
 * and send the result to the home page where markers are clustered
 * NOTE: this is a temporary solution because stable version of mongoose
 * does not implement geospatial query with $geoWithin indicator
 */
 
exports.getplaces = function(req, res){
  var mongodb = require('mongodb');
  mongodb.MongoClient.connect('mongodb://localhost/nodejs-mongodb-leaflet-example', function(err, db) {
    if (err) throw err;

    db.collection('items').find({loc:{
            $geoWithin:{
                $box:[[Number(req.query.box[0][0]), Number(req.query.box[0][1])], 
                      [Number(req.query.box[1][0]), Number(req.query.box[1][1])]]}}},{sectors:0})
        .toArray(function(err, results) {
            if (!results)
                results = [];
            res.send('itemplaces', {
                items: results
            });

            db.close();
        });
  });
}