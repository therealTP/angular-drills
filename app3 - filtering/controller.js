angular.module('filterApp').controller('filterCtrl', function($scope, filterSvc) {

  $scope.getData = function() {
    $scope.data = filterSvc.getData();
  };

  $scope.getData();

  $scope.filterObj = {};

  $scope.updateFilter = function(filterBy, filterTerm) {
    $scope.filterTerm = {filterBy: filterTerm};
    console.log($scope.filterObj, $scope.filterBy);
  };
});
