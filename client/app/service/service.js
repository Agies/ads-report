'use strict';

angular.module('adsReportApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('service', {
        url: '/service/:environment/:service',
        templateUrl: 'app/service/service.html',
        controller: 'ServiceCtrl'
      });
  });