/*
	APP.JS
    @Sebxx's portfolio
*/

angular.module('sebxxPortfolio', [
    'ngRoute',
    'ui.router',
    'ngAnimate',
    'ngSanitize',
    'ngScrollbars',
    'sebxx.global',
    'sebxx.profile'
])

.value('_', window._)

.config(['$urlRouterProvider', '$locationProvider',  function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true).hashPrefix('!');
}])

.run(['$rootScope', function($rootScope){
    $rootScope.mainScroll = {
        autoHideScrollbar: false,
        theme: 'minimal-dark',
        advanced:{
          updateOnContentResize: true
        },
        scrollInertia: 300
    };
}])

.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}])

.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
})

.controller('MainCtrl', ['$scope', function ($scope) {
    
}]);
