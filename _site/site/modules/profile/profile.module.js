(function() {
  'use strict';

  angular
      .module('sebxx.profile', [

      ])
      .config(function($routeProvider){
        $routeProvider
              .when('/', {
                templateUrl: 'site/modules/profile/profile.html',
                controller: 'ProfileController'
              })
              .when('/profile', {
                templateUrl: 'site/modules/profile/profile.html',
                controller: 'ProfileController'
              });
      });
})();