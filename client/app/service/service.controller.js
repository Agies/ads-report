'use strict';

angular.module('adsReportApp')
  .controller('ServiceCtrl', function ($scope, $stateParams, environment) {
    $scope.message = $stateParams.environment + ' ' + $stateParams.service;
    $scope.service = null;
    environment
      .load()
      .then(function (environments) {
        $scope.service = environment.find($stateParams.environment, $stateParams.service);
      });
  });
