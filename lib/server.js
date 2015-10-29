/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

var _this2 = this;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('babel-core/polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _componentsHtml = require('./components/Html');

var _componentsHtml2 = _interopRequireDefault(_componentsHtml);

var server = global.server = (0, _express2['default'])();

server.set('port', process.env.PORT || 5000);
server.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content'));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', function callee$0$0(req, res, next) {
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    var _this = this;

    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return regeneratorRuntime.awrap((function callee$1$0() {
          var statusCode, data, css, context, html;
          return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                statusCode = 200;
                data = { title: '', description: '', css: '', body: '' };
                css = [];
                context = {
                  onInsertCss: function onInsertCss(value) {
                    return css.push(value);
                  },
                  onSetTitle: function onSetTitle(value) {
                    return data.title = value;
                  },
                  onSetMeta: function onSetMeta(key, value) {
                    return data[key] = value;
                  },
                  onPageNotFound: function onPageNotFound() {
                    return statusCode = 404;
                  }
                };
                context$2$0.next = 6;
                return regeneratorRuntime.awrap(_routes2['default'].dispatch({ path: req.path, context: context }, function (state, component) {
                  data.body = _reactDomServer2['default'].renderToString(component);
                  data.css = css.join('');
                }));

              case 6:
                html = _reactDomServer2['default'].renderToStaticMarkup(_react2['default'].createElement(_componentsHtml2['default'], data));

                res.status(statusCode).send('<!doctype html>\n' + html);

              case 8:
              case 'end':
                return context$2$0.stop();
            }
          }, null, _this);
        })());

      case 3:
        context$1$0.next = 8;
        break;

      case 5:
        context$1$0.prev = 5;
        context$1$0.t0 = context$1$0['catch'](0);

        next(context$1$0.t0);

      case 8:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this2, [[0, 5]]);
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), function () {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + server.get('port'));
  if (process.send) {
    process.send('online');
  }
});
//# sourceMappingURL=server.js.map