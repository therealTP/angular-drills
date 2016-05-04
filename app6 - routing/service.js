angular.module('routingApp').service('swApiSvc', swApiSvc);

function swApiSvc($http) {
  this.getPeople = function() {
    return $http({
      method: 'GET',
      url: 'http://swapi.co/api/people/'
    })
    .then(
      function(response) {
        return response.data;
      },
      function(err) {
        return err;
      }
    )
  }
};
