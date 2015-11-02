'use strict';

angular.module('adsReportApp')
  .service('environment', function ($http, $q, socket) {
    var service = {};
    service.cache = null;
    service.load = load;

    socket.socket.on('scan', function (item) {
      service.cache.forEach(function (environment) {
        if (environment.name !== item.environment) {
          return;
        }
        environment.services.forEach(function (service) {
          if (item.service !== service.name) {
            return;
          }
          service.isUp = item.success;
          service.lastCheck = new Date();
        });
      });
    });

    return service;

    function load() {
      return $q(function (resolve, reject) {
        if (service.cache) {
          resolve(service.cache);
          return;
        }
        $http
          .get('/api/environments')
          .success(function (environments) {
            service.cache = environments;
            socket.syncUpdates('environment', service.cache);
            resolve(service.cache);
          });
      });
    }
  });
