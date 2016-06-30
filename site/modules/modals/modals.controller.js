(function () {
    'use strict';

    angular
        .module('sebxx.modals')
        .controller('ItemModalController', ItemModalController);

        ItemModalController.$inject = ['$rootScope', '$scope', '$window'];

        function ItemModalController($rootScope, $scope, $window){
            
            $rootScope.modalInit = function(el) {
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
                }
            };
            $scope.goToExternal = function(e, url) {
                var extWindow = window;
                extWindow.open("http://" + url, '_blank');
            }
        }
})();