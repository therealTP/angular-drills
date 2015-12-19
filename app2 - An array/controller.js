angular.module('arrayApp').controller('arrayCtrl', function($scope, arraySvc) {
  $scope.getData = function() {
    $scope.listData = arraySvc.getData();
  };

  $scope.getData();

});
