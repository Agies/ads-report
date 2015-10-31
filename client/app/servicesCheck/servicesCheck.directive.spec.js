'use strict';

describe('Directive: servicesCheck', function () {

  // load the directive's module and view
  beforeEach(module('adsReportApp'));
  beforeEach(module('app/servicesCheck/servicesCheck.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<services-check></services-check>');
  //   element = $compile(element)(scope);
  //   scope.$apply();
  //   expect(element.text()).toBe('this is the servicesCheck directive');
  // }));
});