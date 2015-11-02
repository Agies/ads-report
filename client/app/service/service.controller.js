'use strict';

angular.module('adsReportApp')
  .controller('ServiceCtrl', function ($scope, $stateParams) {
    $scope.message = 'Hello ' + $stateParams.environment + ' ' + $stateParams.service;
  });
