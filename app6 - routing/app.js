// instantiate angular app & config w/ function below
angular.module("routingApp", ['ui.router']).config(configFcn);

function configFcn($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  .state('details', {
    url: '/details',
    templateUrl: 'templates/details.html',
    controller: 'detailsCtrl',
    resolve: {
      people: function(swApiSvc) {
        return swApiSvc.getPeople();
      }
    }
  });

  // default to home
  $urlRouterProvider.otherwise('/');
}
