/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var exists = function exists(filename) {
  return new Promise(function (resolve) {
    _fs2['default'].exists(filename, resolve);
  });
};

var readFile = function readFile(filename) {
  return new Promise(function (resolve, reject) {
    _fs2['default'].readFile(filename, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports['default'] = { exists: exists, readFile: readFile };
module.exports = exports['default'];
//# sourceMappingURL=fs.js.map