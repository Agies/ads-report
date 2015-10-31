'use strict';

var serviceScan = require('./serviceScan');
var should = require('should');

describe('ServiceScan Start', function () {
  this.timeout(50000);
  before(function () {
  });
  it('should callback with service success or failure', function (done) {
    serviceScan.run(function (result) {
      result.should.not.eql(null);
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