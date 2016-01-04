angular.module('filterApp').controller('filterCtrl', function($scope, filterSvc){
    $scope.test = 'yo';
    $scope.emplData = filterSvc.getEmplData();
});
