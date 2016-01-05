angular.module('routeApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'signup/signupTmpl.html',
    controller: 'signupCtrl'
  })
  .state('details', {
    url: '/details',
    templateUrl: 'details/detailsTmpl.html',
    controller: 'detailsCtrl',
    resolve: {
      toDo: function(detailsSvc) {
        return detailsSvc.getDetails()
        .then(
          function(data) {
            return data;
          }
        );
      }
    }
  });

  $urlRouterProvider
  .otherwise('/');
});
