(function(){
	'use strict';

	angular
		.module('sebxx.portfolio')
		.controller('PortfolioController', PortfolioController);

		PortfolioController.$inject = ['$scope', '$http', '$rootScope', '$routeParams'];

		function PortfolioController($scope, $http, $rootScope, $routeParams) {
			$http.get("site/content/portfolio/" + $routeParams.type + "/items.json").success(function(res){
				$scope.items = res;
			});
			$scope.launchModal = function(el) {
                $rootScope.modalInit(el);
            }
		}
})();