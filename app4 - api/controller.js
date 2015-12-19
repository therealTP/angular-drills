angular.module('pokeDuel').controller('pokeCtrl', function($scope, pokeSvc) {

  var pokedex;
  // start by getting pokedex to property in svc ($scope doesn't need it)
  $scope.getPokedex = function() {
    pokeSvc.getPokedex()
    .then(
      function(pokemon) {
        pokedex = pokemon;
      }
    );
  };

  $scope.getPokedex();

  // get random poke from pokedex
  $scope.getRandomPoke = function() {
    pokeSvc.randomPoke(pokedex)
    .then(
      function(randPoke) {
        $scope.randPoke = randPoke.data;
        return randPoke;
      }
    )
    .then(
      function(randPoke) {
        console.log(randPoke.data);
        return pokeSvc.getSpriteUrl(randPoke.data.sprites[0].resource_uri);
      }
    )
    .then(
      function(img_url) {
        console.log(img_url);
        $scope.randPoke.img_url = img_url;
      }
    );
  };

  // get uri link and use service to get data on pokemon
  // display pokemon in view

}); // end of ctrl
