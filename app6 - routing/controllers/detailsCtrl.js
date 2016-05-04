angular.module('routingApp').controller('detailsCtrl', detailsCtrl);

function detailsCtrl($scope, people) {
  $scope.test = 'DETAILS TEST';
  $scope.people = people.results;
}
