(function(){
	'use strict';

	angular
		.module('sebxx.portfolio')
		.controller('PortfolioController', PortfolioController);

		PortfolioController.$inject = ['$scope', '$http', '$rootScope'];

		function PortfolioController($scope, $http, $rootScope) {
			$http.get("site/content/portfolio/web/items.json").success(function(res){
				$scope.items = res;
			});
			$scope.launchModal = function(el) {
                $rootScope.modalInit(el);
            }
		}
})();