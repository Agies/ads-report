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

// eslint-disable-line no-unused-vars

var _fbjsLibInvariant = require('fbjs/lib/invariant');

var _fbjsLibInvariant2 = _interopRequireDefault(_fbjsLibInvariant);

var _fbjsLibExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var count = 0;

function withStyles(styles) {
  return function (ComposedComponent) {
    return (function (_Component) {
      _inherits(WithStyles, _Component);

      _createClass(WithStyles, null, [{
        key: 'contextTypes',
        value: {
          onInsertCss: _react.PropTypes.func
        },
        enumerable: true
      }]);

      function WithStyles() {
        _classCallCheck(this, WithStyles);

        _get(Object.getPrototypeOf(WithStyles.prototype), 'constructor', this).call(this);
        this.refCount = 0;
        ComposedComponent.prototype.renderCss = (function render(css) {
          var style = undefined;
          if (_fbjsLibExecutionEnvironment.canUseDOM) {
            style = this.styleId && document.getElementById(this.styleId);
            if (style) {
              if ('textContent' in style) {
                style.textContent = css;
              } else {
                style.styleSheet.cssText = css;
              }
            } else {
              this.styleId = 'dynamic-css-' + count++;
              style = document.createElement('style');
              style.setAttribute('id', this.styleId);
              style.setAttribute('type', 'text/css');

              if ('textContent' in style) {
                style.textContent = css;
              } else {
                style.styleSheet.cssText = css;
              }

              document.getElementsByTagName('head')[0].appendChild(style);
              this.refCount++;
            }
          } else {
            this.context.onInsertCss(css);
          }
        }).bind(this);
      }

      _createClass(WithStyles, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          if (_fbjsLibExecutionEnvironment.canUseDOM) {
            (0, _fbjsLibInvariant2['default'])(styles.use, 'The style-loader must be configured with reference-counted API.');
            styles.use();
          } else {
            this.context.onInsertCss(styles.toString());
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          styles.unuse();
          if (this.styleId) {
            this.refCount--;
            if (this.refCount < 1) {
              var style = document.getElementById(this.styleId);
              if (style) {
                style.parentNode.removeChild(style);
              }
            }
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _react2['default'].createElement(ComposedComponent, this.props);
        }
      }]);

      return WithStyles;
    })(_react.Component);
  };
}

exports['default'] = withStyles;
module.exports = exports['default'];
//# sourceMappingURL=withStyles.js.map