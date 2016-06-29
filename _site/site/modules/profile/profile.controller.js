(function(){
	'use strict';

	angular
		.module('sebxx.profile')
		.controller('ProfileController', ProfileController);

		ProfileController.$inject = ['$scope', '$http'];

		function ProfileController($scope, $http) {
			$http.get("site/content/profile/profile.json").success(function(res){
				$scope.profile = res;
			});
		}
})();