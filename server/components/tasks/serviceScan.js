'use strict';

var _ = require('lodash');
var Promise = require('promise');
var Environment = require('../../api/environment/environment.model');
var request = require('request-promise');

exports.run = function (cb) {
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
							console.log("Calling:", url.url);
							var promise = request(options)
								.then(function (response) {
									console.log("Succeeded with:", url.url);
									//Record the success or failure
									if (cb) {
										cb(response);
									}
								})
								.catch(function (err) {
									console.log("Failed with:", url.url, err);
									if (cb) {
										cb(err);
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

exports.scan = function (urls, cb) {

}