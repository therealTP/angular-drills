angular.module('pokeDuel').service('pokeSvc', function($http, $q, cnst) {

    // method to retrieve pokedex from api
    this.getPokedex = function() {
      var def = $q.defer();
      $http({
        method: 'GET',
        url: cnst.base_url + cnst.pokedex_url
      })
      .then(
        function(response) {
          def.resolve(response.data.pokemon);
        },
        function(response) {
          def.reject(response.statusText);
        }
      );
      return def.promise;
      // .then(
      //   function(pokemon) {
      //     this.pokedex = pokemon;
      //     return pokemon.length;
      //   }
      // );
    };

    // method to get random pokemon from pokedex
    this.randomPoke = function(pokedex) {
      var randInd = cnst.randPokeIndex();
      var randPokeUrl = pokedex[randInd].resource_uri;
      var def = $q.defer();
      $http({
        method: 'GET',
        url: cnst.base_url + randPokeUrl
      })
      .then(
        function(response) {
          def.resolve(response);
        },
        function(response) {
          def.reject(response.statusText);
        }
      );
      return def.promise;
    };

    this.getSpriteUrl = function(sprite_uri) {
      var def = $q.defer();
      $http({
        method: 'GET',
        url: cnst.base_url + sprite_uri
      })
      .then(
        function(sprite) {
          def.resolve(sprite.data.image);
        }
      );
      return def.promise;
    };
});
