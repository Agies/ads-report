'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var UrlSchema = new Schema({
  url: String,
  data: Schema.Types.Mixed,
  method: String
});
var ServiceSchema = new Schema({
  name: String,
  urls: [UrlSchema],
  active: { type: Boolean, default: true }
});
var EnvironmentSchema = new Schema({
  name: String,
  services: [ServiceSchema],
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Environment', EnvironmentSchema);