'use strict';

angular.module('adsReportApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.environments = [];
    $http.get('/api/environments').success(function(environments) {
      $scope.environments = environments;
      socket.syncUpdates('environment', $scope.environments);
    }); 
    
    socket.socket.on('service:update', function(item) {
      
    });
    
    $scope.$on('$destroy', function () {
      socket.removeAllListeners('service:update');
      socket.unsyncUpdates('environment');
    });
  });
