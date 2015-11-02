'use strict';

angular.module('adsReportApp')
  .directive('servicesCheck', function () {
    return {
      templateUrl: 'app/servicesCheck/servicesCheck.html',
      restrict: 'EA',
      scope: {
        'environment': '=',
        'show': '='
      },
      link: function (scope, element, attrs) {
      }
    };
  }).directive('properties', function () {
    return {
      templateUrl: 'app/servicesCheck/properties.html',
      restrict: 'EA',
      scope: {
        'environment': '=',
        'service': '=',
        'show': '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });