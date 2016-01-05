angular.module('myApp').controller('mainCtrl', function($scope, mainSvc) {
  $scope.test = 'hay';
  $scope.myData = mainSvc.getData();
});
