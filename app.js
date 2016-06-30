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
    'sebxx.modals',
    'sebxx.profile',
    'sebxx.portfolio'
])

.value('_', window._)

.config(['$urlRouterProvider', '$locationProvider',  function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    //$urlRouterProvider.otherwise('/');
}])

.run(['$rootScope', '$timeout', function($rootScope, $timeout){
    $rootScope.$on('$routeChangeStart', function(){
        jQuery("#top.site").css("filter", "blur(30px)").css("-webkit-filter", "blur(20px)");
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
        jQuery(".sebxxSpinner").show();
    });

    $rootScope.$on('$routeChangeSuccess', function(){
        $timeout(function(){
            jQuery("#top.site").css("filter", "blur(0)").css("-webkit-filter", "blur(0)");
            jQuery(".sebxxSpinner").hide();
        }, 2700);
    });

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

.controller('MainCtrl', ['$rootScope', '$http', function ($rootScope, $http) {
    $rootScope.profProfile = "JavaScript fullstack developer";
    $rootScope.profilePic = "site/assets/img/profile.jpg";
    $http.get("site/content/common/technologies.json").success(function(res){
        $rootScope.technologies = res;
    });
}]);
