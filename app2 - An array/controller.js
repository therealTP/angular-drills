angular.module('arrayApp').controller('arrayController', function($scope, arraySvc) {
  $scope.test = 'wut';
  $scope.data = arraySvc.getData();
});
