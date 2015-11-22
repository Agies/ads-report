'use strict';

angular.module('adsReportApp')
  .service('environment', function ($http, $q, socket) {
    var service = {};
    service.cache = null;
    service.load = load;
    service.find = find;

    socket.socket.on('scan', function (item) {
      console.log(item);
      var ser = find(item.environment, item.service);
      if (ser == null) return;
      ser.isUp = item.success;
      ser.data = item.data;
      ser.lastCheck = new Date();
    });

    return service;

    function find(environmentName, serviceName) {
      var result = null;
      service.cache.forEach(function (env) {
        if (env.name !== environmentName) {
          return null;
        }
        env.services.forEach(function (ser) {
          if (ser.name !== serviceName) {
            return null;
          }
          result = ser;
        });
      });
      return result;
    }

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
