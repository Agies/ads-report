'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('adsReportApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
    scope,
    environment;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      environment: {
        load: function() {
          return $q(function(resolve, reject) {
            console.log('resolved');
            resolve(['1', '2']);
          });
        }
      }
    });
  }));
});
