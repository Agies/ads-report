/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _this = this;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _express = require('express');

var _jade = require('jade');

var _jade2 = _interopRequireDefault(_jade);

var _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

var _utilsFs = require('../utils/fs');

var _utilsFs2 = _interopRequireDefault(_utilsFs);

// A folder with Jade/Markdown/HTML content pages
var CONTENT_DIR = (0, _path.join)(__dirname, './content');

// Extract 'front matter' metadata and generate HTML
var parseJade = function parseJade(path, jadeContent) {
  var fmContent = (0, _frontMatter2['default'])(jadeContent);
  var htmlContent = _jade2['default'].render(fmContent.body);
  return Object.assign({ path: path, content: htmlContent }, fmContent.attributes);
};

var router = new _express.Router();

router.get('/', function callee$0$0(req, res, next) {
  var path, fileName, source, content;
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        path = req.query.path;

        if (!(!path || path === 'undefined')) {
          context$1$0.next = 5;
          break;
        }

        res.status(400).send({ error: 'The \'path\' query parameter cannot be empty.' });
        return context$1$0.abrupt('return');

      case 5:
        fileName = (0, _path.join)(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');
        context$1$0.next = 8;
        return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));

      case 8:
        if (context$1$0.sent) {
          context$1$0.next = 10;
          break;
        }

        fileName = (0, _path.join)(CONTENT_DIR, path + '/index.jade');

      case 10:
        context$1$0.next = 12;
        return regeneratorRuntime.awrap(_utilsFs2['default'].exists(fileName));

      case 12:
        if (context$1$0.sent) {
          context$1$0.next = 16;
          break;
        }

        res.status(404).send({ error: 'The page \'' + path + '\' is not found.' });
        context$1$0.next = 21;
        break;

      case 16:
        context$1$0.next = 18;
        return regeneratorRuntime.awrap(_utilsFs2['default'].readFile(fileName, { encoding: 'utf8' }));

      case 18:
        source = context$1$0.sent;
        content = parseJade(path, source);

        res.status(200).send(content);

      case 21:
        context$1$0.next = 26;
        break;

      case 23:
        context$1$0.prev = 23;
        context$1$0.t0 = context$1$0['catch'](0);

        next(context$1$0.t0);

      case 26:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this, [[0, 23]]);
});

exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=content.js.map