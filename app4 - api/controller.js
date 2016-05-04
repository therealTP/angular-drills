angular.module('apiApp').controller('apiCtrl', apiCtrl);

function apiCtrl($scope, apiSvc) {
  apiSvc.getPeople()
  .then(
    function(res) {
      $scope.data = res;
    }
  )
};
