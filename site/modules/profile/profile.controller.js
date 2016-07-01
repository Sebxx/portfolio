(function(){
	'use strict';

	angular
		.module('sebxx.profile')
		.controller('ProfileController', ProfileController)
		.controller('CVController', CVController)
		.controller('ContactController', ContactController);

		ProfileController.$inject = ['$scope', '$http'];
		CVController.$inject = ['$scope', '$http'];
		ContactController.$inject = ['$scope', '$http'];

		function ProfileController($scope, $http) {
			$http.get("site/content/profile/profile.json").success(function(res){
				$scope.profile = res;
			});
		}
		function CVController($scope, $http) {
			$http.get("site/content/profile/cv.json").success(function(res){
				$scope.cv = res;
			});
		}
		function ContactController($scope, $http) {
			//TODO
		}
})();