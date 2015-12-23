angular.module('pokeDuel').service('pokeSvc', function($http, $q, cnst) {

    var getArrOfUris = function(pokeArr) {
      var uriArr = [];
      for (var i = 0; i < pokeArr.length; i++) {
        uriArr.push(pokeArr[i].resource_uri);
      }
      return uriArr;
    };

    // method to retrieve pokedex from api
    this.getPokedexNew = function() {
      $http({
        method: 'GET',
        url: cnst.base_url + cnst.pokedex_url
      })
      .then(
        function(response) {
          var arr = getArrOfUris(response.data.pokemon);
          localStorage.pokedex = JSON.stringify(arr);
        },
        function(response) {
          def.reject(response.statusText);
        }
      );
    };

    // method to get random pokemon from pokedex
    this.randomPoke = function() {
      var randInd = cnst.randPokeIndex(); // generate random number
      var randPokeUrl = JSON.parse(localStorage.pokedex)[randInd]; // get rand URL from array
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
