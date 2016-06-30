(function () {
    'use strict';

    angular
        .module('sebxx.modals')
        .controller('ItemModalController', ItemModalController);

        ItemModalController.$inject = ['$rootScope', '$scope', '$window'];

        function ItemModalController($rootScope, $scope, $window){
            
            $rootScope.modalInit = function(el) {
                jQuery("#top.site").css("filter", "blur(30px)").css("-webkit-filter", "blur(20px)");
                $scope.item = el;
                jQuery("#portfolioItemModal").animate({
                    "opacity": 1,
                    "z-index": 1002
                }, 500, "linear");
            };
            $scope.checkNDestroy = function(e) {
                if ( jQuery("#portfolioItemModal").is(":visible") && ( !jQuery(e.target).closest(".modalContainer").length || jQuery(".modalContainer .close").length ) ) {
                    jQuery("#portfolioItemModal").animate({
                        "opacity": 0,
                        "z-index": -1
                    }, 500, "linear");
                    $scope.item = {};
                    jQuery("#top.site").css("filter", "blur(0)").css("-webkit-filter", "blur(0)");
                }
            };
            $scope.goToExternal = function(e, url) {
                var extWindow = window;
                extWindow.open("http://" + url, '_blank');
            }
        }
})();