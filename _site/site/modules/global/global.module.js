(function() {
  'use strict';

  angular
      .module('sebxx.global', [

      ])
      .config(function() {

      }) 
      .controller('HeaderController', HeaderController);

      HeaderController.$inject = ['$scope'];

      function HeaderController($scope){
        $scope.menuItems = [
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
                  es: 'móvil',
                  url: '/portfolio/mobile',
                  hasChildren: false
                },
                {
                  name: 'Others',
                  es: 'Otros',
                  url: '/portfolio/others',
                  hasChildren: false
                }
              ]
            },
            {
              name: 'Contact',
              es: 'contacto',
              url: '/contact',
              icon: 'fa-whatsapp',
              hasChildren: false
            }
          ];
          $scope.config = {
            autoHideScrollbar: true,
            theme: 'minimal-dark',
            advanced:{
              updateOnContentResize: true
            },
            scrollInertia: 500
          };
      }
})();