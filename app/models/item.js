
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = mongoose.Schema

/**
 * Item Schema
 */

var ItemSchema = new Schema({
	name: String,
	loc: [Number, Number]
})


mongoose.model('Item', ItemSchema)
