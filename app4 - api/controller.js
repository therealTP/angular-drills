angular.module('apiApp').controller('apiCtrl', function($scope, apiSvc) {
  $scope.test = 'heyo';
  apiSvc.getData()
  .then(
    function(data) {
      $scope.swData = data;
    }
  );

});
