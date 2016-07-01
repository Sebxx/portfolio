(function() {
  'use strict';

  angular
      .module('sebxx.global', [

      ])
      .config(function() {

      }) 
      .controller('HeaderController', HeaderController);

      HeaderController.$inject = ['$scope', '$location'];

      function HeaderController($scope, $location){
        $scope.menuItems = [
            {
              name: 'Curriculum vitae',
              es: 'Currículum vítae',
              url: '/cv',
              icon: 'fa-tasks',
              hasChildren: false
            },
            {
              name: 'Profile',
              es: 'Perfil',
              url: '/profile',
              icon: 'fa-user',
              hasChildren: false
            },
            {
              name: 'Portfolio',
              es: 'Portafolio',
              url: '/portfolio',
              icon: 'fa-briefcase',
              hasChildren: true,
              children: [
                {
                  name: 'Web',
                  es: 'Web',
                  url: '/portfolio/web',
                  hasChildren: false
                },
                {
                  name: 'Enterprise',
                  es: 'Empresarial',
                  url: '/portfolio/enterprise',
                  hasChildren: false
                },
                {
                  name: 'Mobile',
                  es: 'Móvil',
                  url: '/portfolio/mobile',
                  hasChildren: false
                }
              ]
            },
            {
              name: 'Contact',
              es: 'Contacto',
              url: '/contact',
              icon: 'fa-whatsapp',
              hasChildren: false
            }
          ];
          $scope.goToPath = function (e, path, type) {
            console.log(path);
            if (jQuery(e.currentTarget).hasClass("submenuParent")) 
                jQuery(e.currentTarget).next(".submenu").toggle(250);
            else {
              $location.path(path);
              jQuery(".submenu").hide(250);
            }
            
          }
          $scope.collapseMenu = function() {
            jQuery("header #sidebar, #siteContainer, footer").addClass("collapsed");
          }
          $scope.expandMenu = function () {
            jQuery("header #sidebar, #siteContainer, footer").removeClass("collapsed"); 
          }
      }
})();