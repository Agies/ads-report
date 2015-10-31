/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Environment = require('../api/environment/environment.model');

Environment.find({}).remove(function () {
  Environment.create(
    {
      name: 'UAT',
      services: [
        {
          name: 'Functional',
          urls: [
            {
              url: "https://retailuat1.alldata.net/services/propertyservice/properties/client/trek",
              method: "get"
            }
          ],
        }, {
          name: 'Property',
          urls: [
            {
              url: "https://msl.test2.mycardcare.com/config/stage/android/en/",
              method: "get"
            },
            {
              url: "https://msl.test2.mycardcare.com/config/global-configuration/android/en/",
              method: "get"
            }
          ],
        }, {
          name: 'Axes',
          urls: [
            {
              url: "https://retailuat.alldata.net/axes103/rest/loginservice1x/loginservice10/login?client=stage&channel=native-mobile",
              method: "post",
              data: { "mediation": { "clientHeader": { "clientName": "stage", "correlationData": "", "timeStamp": "Oct 30, 2015 11:49:01 PM", "version": "1.0.0" }, "credentials": { "username": "KP8pqgDi6ggGJjz" } }, "request": { "accountIdentifier": { "clientName": "stage", "deviceId": "ffffffff-b714-41b1-3c31-afaa4177d25a" }, "login": { "webUser": { "password": "tropical1", "username": "adsdemo0" } } } }
            }
          ],
        }
      ]
    }, {
      name: 'PROD',
      services: [
        {
          name: 'Functional',
          urls: [
            {
              url: "https://comenity.net/services/propertyservice/properties/client/trek",
              method: "get"
            }
          ],
        }, {
          name: 'Property',
          urls: [
            {
              url: "https://msl.mycardcare.com/config/trek/android/en/",
              method: "get"
            },
            {
              url: "https://msl.mycardcare.com/config/global-configuration/android/en/",
              method: "get"
            }
          ],
        }, {
          name: 'Axes',
          urls: [
            {
              url: "https://axes.alldata.net/axes103/rest/loginservice1x/loginservice10/login?client=trek&channel=native-mobile",
              method: "post",
              data: { "mediation": { "clientHeader": { "clientName": "trek", "correlationData": "", "timeStamp": "Oct 31, 2015 12:09:35 AM", "version": "1.0.0" }, "credentials": { "username": "tJthgXnbfy5MJNp" } }, "request": { "accountIdentifier": { "clientName": "trek", "deviceId": "ffffffff-b714-41b1-3c31-afaa4177d25a" }, "login": { "webUser": { "password": "tropical1", "username": "adsdemo0" } } } }
            }
          ],
        }
      ]
    });
});

Thing.find({}).remove(function () {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
});

User.find({}).remove(function () {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function () {
      console.log('finished populating users');
    }
    );
});