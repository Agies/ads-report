/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppCss = require('./App.css');

var _AppCss2 = _interopRequireDefault(_AppCss);

var _decoratorsWithContext = require('../../decorators/withContext');

var _decoratorsWithContext2 = _interopRequireDefault(_decoratorsWithContext);

var _decoratorsWithStyles = require('../../decorators/withStyles');

var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Feedback = require('../Feedback');

var _Feedback2 = _interopRequireDefault(_Feedback);

var _Footer = require('../Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, _App);

    _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return !this.props.error ? _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Header2['default'], null),
        this.props.children,
        _react2['default'].createElement(_Feedback2['default'], null),
        _react2['default'].createElement(_Footer2['default'], null)
      ) : this.props.children;
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.element.isRequired,
      error: _react.PropTypes.object
    },
    enumerable: true
  }]);

  var _App = App;
  App = (0, _decoratorsWithStyles2['default'])(_AppCss2['default'])(App) || App;
  App = (0, _decoratorsWithContext2['default'])(App) || App;
  return App;
})(_react.Component);

exports['default'] = App;
module.exports = exports['default'];
//# sourceMappingURL=App.js.map