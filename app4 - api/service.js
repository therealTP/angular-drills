angular.module('apiApp').service('mainSvc', function($http, $q) {
  var base_url = 'http://swapi.co/api';
  this.getApiData = function(resourceUrl) {
    var def = $q.defer();
    $http({
      method: 'GET',
      url: base_url + resourceUrl
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
