(function() {
  'use strict';

  angular
      .module('sebxx.profile', [

      ])
      .config(function($routeProvider){
        $routeProvider
              .when('/', {
                templateUrl: 'public/site/modules/profile/profile.html',
                controller: 'ProfileController'
              })
              .when('/profile', {
                templateUrl: 'public/site/modules/profile/profile.html',
                controller: 'ProfileController'
              });
      });
})();