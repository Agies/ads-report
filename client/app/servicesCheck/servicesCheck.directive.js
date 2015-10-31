'use strict';

angular.module('adsReportApp')
  .directive('servicesCheck', function () {
    return {
      templateUrl: 'app/servicesCheck/servicesCheck.html',
      restrict: 'EA',
      scope: {
        'environment': '=',
      },
      link: function (scope, element, attrs) {
      }
    };
  }).directive('properties', function () {
    return {
      templateUrl: 'app/servicesCheck/properties.html',
      restrict: 'EA',
      scope: {
        'service':'='
      },
      link: function (scope, element, attrs) {
      }
    };
  });