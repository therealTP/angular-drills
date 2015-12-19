angular.module('pokeDuel').factory('cnst', function() {
    // http://pokeapi.co/media/img/1383571573.78.png
    // create constants object to hold all constants
    var constants = {};

    constants.base_url = 'http://pokeapi.co/';
    constants.pokedex_url = 'api/v1/pokedex/1/';
    constants.sprites_url = 'api/v1/sprite/'; // + id/
    constants.pokemon_count = 778; // add on sprite url
    constants.randPokeIndex = function() {
      return Math.floor(Math.random() * constants.pokemon_count);
    };

    return constants;

}); // end of fact
