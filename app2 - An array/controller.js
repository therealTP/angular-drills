angular.module('arrayApp').controller('arrayController', arrayController);

function arrayController($scope, mainSvc) {
  $scope.myData = mainSvc.data;
};
