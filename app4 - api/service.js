angular.module('apiApp').service('apiSvc', apiSvc);

function apiSvc($http) {
  var baseUrl = 'http://swapi.co/api/';

  this.getPeople = function() {
    return $http({
      url: baseUrl + 'people/',
      method: 'GET'
    })
    .then(
      function(response) {
        return response.data;
      },
      function(err) {
        return err;
      }
    )
  };
}
