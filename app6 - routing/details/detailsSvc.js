angular.module('routeApp').service('detailsSvc', function($http, $q) {
  this.getDetails = function() {
    var def = $q.defer();
    $http({
      method: 'GET',
      url: 'http://swapi.co/api/planets/'
    })
    .then(
      function(response) {
        def.resolve(response.data.results);
      },
      function(err) {
        console.log(err);
      }
    );
    return def.promise;
  };
});
