/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('babel-core/polyfill');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _coreLocation = require('./core/Location');

var _coreLocation2 = _interopRequireDefault(_coreLocation);

var _utilsDOMUtils = require('./utils/DOMUtils');

var cssContainer = document.getElementById('css');
var appContainer = document.getElementById('app');
var context = {
  onSetTitle: function onSetTitle(value) {
    return document.title = value;
  },
  onSetMeta: function onSetMeta(name, content) {
    // Remove and create a new <meta /> tag in order to make it work
    // with bookmarks in Safari
    var elements = document.getElementsByTagName('meta');
    [].slice.call(elements).forEach(function (element) {
      if (element.getAttribute('name') === name) {
        element.parentNode.removeChild(element);
      }
    });
    var meta = document.createElement('meta');
    meta.setAttribute('name', name);
    meta.setAttribute('content', content);
    document.getElementsByTagName('head')[0].appendChild(meta);
  }
};

function render(state) {
  _routes2['default'].dispatch(state, function (newState, component) {
    _reactDom2['default'].render(component, appContainer, function () {
      // Restore the scroll position if it was saved into the state
      if (state.scrollY !== undefined) {
        window.scrollTo(state.scrollX, state.scrollY);
      } else {
        window.scrollTo(0, 0);
      }

      // Remove the pre-rendered CSS because it's no longer used
      // after the React app is launched
      if (cssContainer) {
        cssContainer.parentNode.removeChild(cssContainer);
        cssContainer = null;
      }
    });
  });
}

function run() {
  var currentLocation = null;
  var currentState = null;

  // Make taps on links and buttons work fast on mobiles
  _fastclick2['default'].attach(document.body);

  // Re-render the app when window.location changes
  var unlisten = _coreLocation2['default'].listen(function (location) {
    currentLocation = location;
    currentState = Object.assign({}, location.state, {
      path: location.pathname,
      query: location.query,
      state: location.state,
      context: context
    });
    render(currentState);
  });

  // Save the page scroll position into the current location's state
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  var setPageOffset = function setPageOffset() {
    currentLocation.state = currentLocation.state || Object.create(null);
    if (supportPageOffset) {
      currentLocation.state.scrollX = window.pageXOffset;
      currentLocation.state.scrollY = window.pageYOffset;
    } else {
      currentLocation.state.scrollX = isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
      currentLocation.state.scrollY = isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }
  };

  (0, _utilsDOMUtils.addEventListener)(window, 'scroll', setPageOffset);
  (0, _utilsDOMUtils.addEventListener)(window, 'pagehide', function () {
    (0, _utilsDOMUtils.removeEventListener)(window, 'scroll', setPageOffset);
    unlisten();
  });
}

// Run the application when both DOM is ready
// and page content is loaded
if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
//# sourceMappingURL=app.js.map