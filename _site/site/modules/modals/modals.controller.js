(function () {
    'use strict';

    angular
        .module('sebxx.modals')
        .controller('ItemModalController', ItemModalController);

        ItemModalController.$inject = ['$rootScope', '$scope'];

        function ItemModalController($rootScope, $scope){
            
            $rootScope.modalInit = function(el) {
                $scope.item = el;
                jQuery("#portfolioItemModal").show();
            };
            $scope.checkNDestroy = function(e) {
                if ( jQuery("#portfolioItemModal").is(":visible") && !jQuery(e.target).closest(".modalContainer").length ) {
                    jQuery("#portfolioItemModal").hide();
                    $scope.item = {};
                }
            };
        }
})();