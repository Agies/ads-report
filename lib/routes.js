/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _this = this;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRoutingSrcRouter = require('react-routing/src/Router');

var _reactRoutingSrcRouter2 = _interopRequireDefault(_reactRoutingSrcRouter);

var _coreHttpClient = require('./core/HttpClient');

var _coreHttpClient2 = _interopRequireDefault(_coreHttpClient);

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsContentPage = require('./components/ContentPage');

var _componentsContentPage2 = _interopRequireDefault(_componentsContentPage);

var _componentsContactPage = require('./components/ContactPage');

var _componentsContactPage2 = _interopRequireDefault(_componentsContactPage);

var _componentsLoginPage = require('./components/LoginPage');

var _componentsLoginPage2 = _interopRequireDefault(_componentsLoginPage);

var _componentsRegisterPage = require('./components/RegisterPage');

var _componentsRegisterPage2 = _interopRequireDefault(_componentsRegisterPage);

var _componentsNotFoundPage = require('./components/NotFoundPage');

var _componentsNotFoundPage2 = _interopRequireDefault(_componentsNotFoundPage);

var _componentsErrorPage = require('./components/ErrorPage');

var _componentsErrorPage2 = _interopRequireDefault(_componentsErrorPage);

var router = new _reactRoutingSrcRouter2['default'](function (on) {
  on('*', function callee$1$0(state, next) {
    var component;
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return regeneratorRuntime.awrap(next());

        case 2:
          component = context$2$0.sent;
          return context$2$0.abrupt('return', component && _react2['default'].createElement(
            _componentsApp2['default'],
            { context: state.context },
            component
          ));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  on('/contact', function callee$1$0() {
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          return context$2$0.abrupt('return', _react2['default'].createElement(_componentsContactPage2['default'], null));

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  on('/login', function callee$1$0() {
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          return context$2$0.abrupt('return', _react2['default'].createElement(_componentsLoginPage2['default'], null));

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  on('/register', function callee$1$0() {
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          return context$2$0.abrupt('return', _react2['default'].createElement(_componentsRegisterPage2['default'], null));

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  on('*', function callee$1$0(state) {
    var content;
    return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return regeneratorRuntime.awrap(_coreHttpClient2['default'].get('/api/content?path=' + state.path));

        case 2:
          content = context$2$0.sent;
          return context$2$0.abrupt('return', content && _react2['default'].createElement(_componentsContentPage2['default'], content));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, _this);
  });

  on('error', function (state, error) {
    return state.statusCode === 404 ? _react2['default'].createElement(
      _componentsApp2['default'],
      { context: state.context, error: error },
      _react2['default'].createElement(_componentsNotFoundPage2['default'], null)
    ) : _react2['default'].createElement(
      _componentsApp2['default'],
      { context: state.context, error: error },
      _react2['default'].createElement(_componentsErrorPage2['default'], null)
    );
  });
});

exports['default'] = router;
module.exports = exports['default'];
//# sourceMappingURL=routes.js.map