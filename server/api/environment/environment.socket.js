/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Environment = require('./environment.model');

exports.register = function(socket) {
  Environment.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Environment.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('environment:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('environment:remove', doc);
}