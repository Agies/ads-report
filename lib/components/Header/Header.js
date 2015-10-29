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

var _HeaderCss = require('./Header.css');

var _HeaderCss2 = _interopRequireDefault(_HeaderCss);

var _decoratorsWithStyles = require('../../decorators/withStyles');

var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var _Navigation = require('../Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var Header = (function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, _Header);

    _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'Header' },
        _react2['default'].createElement(
          'div',
          { className: 'Header-container' },
          _react2['default'].createElement(
            'a',
            { className: 'Header-brand', href: '/', onClick: _Link2['default'].handleClick },
            _react2['default'].createElement('img', { className: 'Header-brandImg', src: require('./logo-small.png'), width: '38', height: '38', alt: 'React' }),
            _react2['default'].createElement(
              'span',
              { className: 'Header-brandTxt' },
              'Your Company'
            )
          ),
          _react2['default'].createElement(_Navigation2['default'], { className: 'Header-nav' }),
          _react2['default'].createElement(
            'div',
            { className: 'Header-banner' },
            _react2['default'].createElement(
              'h1',
              { className: 'Header-bannerTitle' },
              'React'
            ),
            _react2['default'].createElement(
              'p',
              { className: 'Header-bannerDesc' },
              'Complex web apps made easy'
            )
          )
        )
      );
    }
  }]);

  var _Header = Header;
  Header = (0, _decoratorsWithStyles2['default'])(_HeaderCss2['default'])(Header) || Header;
  return Header;
})(_react.Component);

exports['default'] = Header;
module.exports = exports['default'];
//# sourceMappingURL=Header.js.map