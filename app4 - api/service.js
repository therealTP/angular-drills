angular.module('apiApp').service('apiSvc', function($http, $q) {
  this.getData = function() {
    var def = $q.defer();
    $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    })
    .then(
      function(response) {
        console.log(response.data);
        def.resolve(response.data.results);
      },
      function(err) {
        def.reject(err);
      }
    );
    return def.promise;
  };
});
