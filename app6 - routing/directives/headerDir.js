angular.module('routingApp').directive('myHeader', myHeader);

function myHeader() {
  return {
    templateUrl: './../templates/headerDir.html'
  }
}
