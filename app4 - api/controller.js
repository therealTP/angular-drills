angular.module('apiApp').controller('mainCtrl', function($scope, mainSvc) {
  $scope.test = 'har';
  mainSvc.getApiData('/planets')
  .then(
    function(response) {
      $scope.myData = response;
    }
  );
});
