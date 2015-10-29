/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _decoratorsWithStyles = require('../../decorators/withStyles');

var _decoratorsWithStyles2 = _interopRequireDefault(_decoratorsWithStyles);

var _TextBoxCss = require('./TextBox.css');

var _TextBoxCss2 = _interopRequireDefault(_TextBoxCss);

var TextBox = (function (_Component) {
  _inherits(TextBox, _Component);

  function TextBox() {
    _classCallCheck(this, _TextBox);

    _get(Object.getPrototypeOf(_TextBox.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TextBox, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'TextBox' },
        this.props.maxLines > 1 ? _react2['default'].createElement('textarea', _extends({}, this.props, { className: 'TextBox-input', ref: 'input', key: 'input', rows: this.props.maxLines })) : _react2['default'].createElement('input', _extends({}, this.props, { className: 'TextBox-input', ref: 'input', key: 'input' }))
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      maxLines: _react.PropTypes.number
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      maxLines: 1
    },
    enumerable: true
  }]);

  var _TextBox = TextBox;
  TextBox = (0, _decoratorsWithStyles2['default'])(_TextBoxCss2['default'])(TextBox) || TextBox;
  return TextBox;
})(_react.Component);

exports['default'] = TextBox;
module.exports = exports['default'];
//# sourceMappingURL=TextBox.js.map