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

var _FooterCss = require('./Footer.css');

var _FooterCss2 = _interopRequireDefault(_FooterCss);

var _decoratorsWithViewport = require('../../decorators/withViewport');

var _decoratorsWithViewport2 = _interopRequireDefault(_decoratorsWithViewport);

var _decoratorsWithStyles = require('../../decorators/withStyles');

var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

var Footer = (function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, _Footer);

    _get(Object.getPrototypeOf(_Footer.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      // This is just an example how one can render CSS
      var _props$viewport = this.props.viewport;
      var width = _props$viewport.width;
      var height = _props$viewport.height;

      this.renderCss('.Footer-viewport:after {content:\' ' + width + 'x' + height + '\';}');

      return _react2['default'].createElement(
        'div',
        { className: 'Footer' },
        _react2['default'].createElement(
          'div',
          { className: 'Footer-container' },
          _react2['default'].createElement(
            'span',
            { className: 'Footer-text' },
            '© Your Company'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Footer-spacer' },
            '·'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Footer-link', href: '/', onClick: _Link2['default'].handleClick },
            'Home'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Footer-spacer' },
            '·'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Footer-link', href: '/privacy', onClick: _Link2['default'].handleClick },
            'Privacy'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Footer-spacer' },
            '·'
          ),
          _react2['default'].createElement(
            'a',
            { className: 'Footer-link', href: '/not-found', onClick: _Link2['default'].handleClick },
            'Not Found'
          ),
          _react2['default'].createElement(
            'span',
            { className: 'Footer-spacer' },
            ' | '
          ),
          _react2['default'].createElement(
            'span',
            { ref: 'viewport', className: 'Footer-viewport Footer-text Footer-text--muted' },
            'Viewport:'
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      viewport: _react.PropTypes.shape({
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired
      }).isRequired
    },
    enumerable: true
  }]);

  var _Footer = Footer;
  Footer = (0, _decoratorsWithStyles2['default'])(_FooterCss2['default'])(Footer) || Footer;
  Footer = (0, _decoratorsWithViewport2['default'])(Footer) || Footer;
  return Footer;
})(_react.Component);

exports['default'] = Footer;
module.exports = exports['default'];
//# sourceMappingURL=Footer.js.map