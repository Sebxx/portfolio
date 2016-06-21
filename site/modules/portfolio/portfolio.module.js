(function() {
  'use strict';

  angular
      .module('sebxx.portfolio', [

      ])
      .config(function($routeProvider){
        $routeProvider
              .when('/portfolio', {
                templateUrl: 'site/modules/portfolio/portfolio.html',
                controller: 'PortfolioController'
              })
              .when('/portfolio/:type', {
                templateUrl: 'site/modules/portfolio/portfolio.html',
                controller: 'PortfolioController'
              });
      });
})();