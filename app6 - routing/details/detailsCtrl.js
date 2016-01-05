angular.module('routeApp').controller('detailsCtrl', function($scope, detailsSvc, toDo) {
  $scope.myData = toDo;
});
