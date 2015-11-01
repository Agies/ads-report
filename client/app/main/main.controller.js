'use strict';

angular.module('adsReportApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.environments = [];
    $http.get('/api/environments').success(function(environments) {
      $scope.environments = environments;
      socket.syncUpdates('environment', $scope.environments);
    }); 
    
    socket.socket.on('scan', function(item) {
      console.log('scan received:', item);
      $scope.environments.forEach(function(environment) {
        if (environment.name != item.environment) return;
        environment.services.forEach(function(service) { 
          if (item.service != service.name) return;
          service.isUp = item.success;
          service.lastCheck = new Date();
        });
      });
    });
    
    $scope.$on('$destroy', function () {
      socket.removeAllListeners('scan');
      socket.unsyncUpdates('environment');
    });
  });
