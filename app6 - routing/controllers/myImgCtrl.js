angular.module('routingApp').controller('myImgCtrl', myImgCtrl);

function myImgCtrl($scope) {
  console.log($scope.imgSrc);
}
