'use strict';

var serviceScan = require('./serviceScan');
var should = require('should');

describe('ServiceScan Start', function () {
  this.timeout(30000);
  before(function () {
  });
  it('should callback with service success or failure', function (done) {
    serviceScan.run(function (result) {
      result.should.not.eql(null);
      result.environment.should.not.eql(null);
      result.service.should.not.eql(null);
      result.url.should.not.eql(null);
      result.success.should.not.eql(null);
      result.data.should.not.eql(null);
    }).then(function() {
      done();
    });
  });
  it('should callback an expected number of times', function (done) {
    var count = 0;
    serviceScan.run(function (result) {
      count++;
    }).then(function() {
      console.log("Number of service calls:", count);
      count.should.be.eql(8);
      done();
    });
  });
});

describe('ServiceScan Scan', function () {
  this.timeout(30000);
  it('should stop scanning when stop is called', function(done) {
    serviceScan
    .scan(null)
    .then(function() {
      done();
    });
    serviceScan.stop();
  });
  it('should fire off services scans based on throttle', function(done) {
    var start = new Date();
    serviceScan
    .scan(null)
    .then(function() {
      (new Date() - start).should.be.above(serviceScan.throttle);
      done();
    });
    setTimeout(function() {
      serviceScan.stop();
    }, 7000);
  });
  it('should cache the previous run', function(done) {
    serviceScan
    .scan(null)
    .then(function() {
      Object.keys(serviceScan.cache).length.should.be.eql(8);
      done();
    });
    serviceScan.stop();
  });
});