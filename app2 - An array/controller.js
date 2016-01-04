angular.module('arrayApp').controller('arrayController', function($scope, arraySvc){
  $scope.test = 'hey';
  $scope.emplData = arraySvc.getEmplData();
});
