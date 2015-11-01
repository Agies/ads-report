/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var _ = require('lodash');
var ServiceScan = require('./serviceScan');

exports.send = function(socket, data) {
  console.log('scan result');
  socket.emit('scan', data);
};
exports.register = function(socket) {
  _.forEach(ServiceScan.cache, function(n, key){
    exports.send(socket, n);
  });
};