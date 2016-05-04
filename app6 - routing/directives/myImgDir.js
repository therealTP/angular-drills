angular.module('routingApp').directive('myImg', myImg);

function myImg() {
  return {
    restrict: 'E',
    templateUrl: './../templates/myImg.html',
    scope: {
      imgSrc: '@'
    },
    controller: 'myImgCtrl',
    link: function(scope, elem, attrs) {
      // do something w/ scope, elem, attrs
    }
  }
}
