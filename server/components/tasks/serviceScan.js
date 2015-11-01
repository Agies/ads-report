'use strict';

var _ = require('lodash');
var Promise = require('promise');
var Environment = require('../../api/environment/environment.model');
var request = require('request-promise');
var shouldContinue = true;
var mod = {};
mod.lastRun = null;
mod.nextRun = null;
mod.throttle = 10000;
mod.cache = {};
mod.run = function (cb) {
	return new Promise(function (fulfill, reject) {
		//GET Environments
		var promises = [];
		Environment
			.find(function (err, environments) {
				//Go through Environments
				_.forEach(environments, function (environment) {
					_.forEach(environment.services, function (service) {
						_.forEach(service.urls, function (url) {
							//Call to each Service
							var options = {
								method: url.method,
								uri: url.url,
								body: url.data,
								json: true,
								resolveWithFullResponse: true
							};
							console.log("Scan Calling:", url.url);
							var result = {
								environment: environment.name,
								service: service.name,
								url: url.url
							}
							var promise = request(options)
								.then(function (response) {
									console.log("Scan Success:", url.url);
									result.data = response.body;
									result.success = true;
									mod.cache[result.url] = result;
									if (cb) {
										cb(result);
									}
								})
								.catch(function (err) {
									console.log("Scan Failure:", url.url);
									result.data = err;
									result.success = false;
									mod.cache[result.url] = result;
									if (cb) {
										cb(result);
									}
								});
							promises.push(promise)
						});
					});
				});
				Promise
					.all(promises)
					.then(function (results) {
						fulfill();
					});
			});
	});
}

mod.scan = function (cb) {
	shouldContinue = true;
	return new Promise(function (fulfill, reject) {
		scan(cb, fulfill, reject);
	});
}

mod.stop = function () {
	shouldContinue = false;
}

function scan(cb, fulfill, reject) {
	mod.lastRun = new Date();
	//Add Throttle
	//service.nextRun = service.lastRun;
	console.log('Scanning at', mod.lastRun);
	mod
	.run(cb)
	.then(function () {
		var now = new Date();
		var difference  = parseInt(now - mod.lastRun);
		console.log('Difference between last run and now', difference);
		if (shouldContinue) {
			if (difference >= mod.throttle) {
				console.log('No wait required scanning now');
				scan(cb, fulfill, reject);
			} else {
				var wait = mod.throttle - difference;
				console.log('Waiting till next run:', wait);
				setTimeout(function() {
					scan(cb, fulfill, reject);
				}, wait);
			}
		} else {
			console.log('Stopped at', new Date());
			fulfill();
		}
	});
}

module.exports = mod;