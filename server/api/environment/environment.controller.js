'use strict';

var _ = require('lodash');
var Environment = require('./environment.model');

// Get list of environments
exports.index = function(req, res) {
  Environment.find(function (err, environments) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(environments);
  });
};

// Get a single environment
exports.show = function(req, res) {
  Environment.findById(req.params.id, function (err, environment) {
    if(err) { return handleError(res, err); }
    if(!environment) { return res.status(404).send('Not Found'); }
    return res.json(environment);
  });
};

// Creates a new environment in the DB.
exports.create = function(req, res) {
  Environment.create(req.body, function(err, environment) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(environment);
  });
};

// Updates an existing environment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Environment.findById(req.params.id, function (err, environment) {
    if (err) { return handleError(res, err); }
    if(!environment) { return res.status(404).send('Not Found'); }
    var updated = _.merge(environment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(environment);
    });
  });
};

// Deletes a environment from the DB.
exports.destroy = function(req, res) {
  Environment.findById(req.params.id, function (err, environment) {
    if(err) { return handleError(res, err); }
    if(!environment) { return res.status(404).send('Not Found'); }
    environment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}