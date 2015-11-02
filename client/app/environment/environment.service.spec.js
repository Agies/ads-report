'use strict';

describe('Service: environment', function () {

  // load the service's module
  beforeEach(module('adsReportApp'));
  beforeEach(module('socketMock'));

  var $httpBackend;
  var environment;
  
  beforeEach(inject(function (_$httpBackend_, _environment_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/environments')
      .respond([{name:'UAT'}, {name:'Prod'}]);

    environment = _environment_;
  }));

  it('should cache loaded results', function () {
    environment.load();
    $httpBackend.flush();
    expect(environment.cache.length).toBe(2);
  });
});
