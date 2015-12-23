angular.module('pokeDuel').controller('pokeCtrl', function($scope, pokeSvc) {

  function getPokedex() {
    pokeSvc.getPokedexNew();
  }

  getPokedex();

  // get random poke from pokedex, assign to scopeVar parameter
  $scope.getRandomPoke = function(scopeVar) {
    pokeSvc.randomPoke()
    .then(
      function(randPoke) {
        $scope[scopeVar] = randPoke.data;
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
        $scope[scopeVar].img_url = img_url;
      }
    );
  };

  $scope.getTwoNewPokemon = function() {
    $scope.getRandomPoke('randPoke1');
    $scope.getRandomPoke('randPoke2');
  };

  // get uri link and use service to get data on pokemon
  // display pokemon in view

}); // end of ctrl
