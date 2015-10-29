/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _fbjsLibExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

function getUrl(path) {
  if (path.startsWith('http') || _fbjsLibExecutionEnvironment.canUseDOM) {
    return path;
  }

  return process.env.WEBSITE_HOSTNAME ? 'http://' + process.env.WEBSITE_HOSTNAME + path : 'http://127.0.0.1:' + global.server.get('port') + path;
}

var HttpClient = {

  get: function get(path) {
    return new Promise(function (resolve, reject) {
      _superagent2['default'].get(getUrl(path)).accept('application/json').end(function (err, res) {
        if (err) {
          if (err.status === 404) {
            resolve(null);
          } else {
            reject(err);
          }
        } else {
          resolve(res.body);
        }
      });
    });
  }

};

exports['default'] = HttpClient;
module.exports = exports['default'];
//# sourceMappingURL=HttpClient.js.map