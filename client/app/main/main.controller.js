'use strict';

angular.module('adsReportApp')
  .controller('MainCtrl', function ($scope, $http, $location, socket, environment) {
    $scope.environments = [];
    $scope.show = function(environment, service) {
      $location.path('/service/' + environment.name + '/' + service.name);
    }
    environment
      .load()
      .then(function (environments) {
        $scope.environments = environments;
      });

    $scope.$on('$destroy', function () {
    });
    
  });
