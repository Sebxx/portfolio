(function() {
  'use strict';

  angular
      .module('sebxx.profile', [

      ])
      .config(function($routeProvider){
        $routeProvider
              .when('/', {
                templateUrl: 'site/modules/profile/cv.html',
                controller: 'CVController'
              })
              .when('/cv', {
                templateUrl: 'site/modules/profile/cv.html',
                controller: 'CVController'
              })
              .when('/profile', {
                templateUrl: 'site/modules/profile/profile.html',
                controller: 'ProfileController'
              })
              .when('/contact', {
                templateUrl: 'site/modules/profile/contact.html',
                controller: 'ContactController'
              });
      });
})();