export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMON = 'FETCH_POKEMON';

export const fetchPokemons = (offset, limit) => {
  return async dispatch => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=' + offset + '&limit=' + limit;
    const response = await fetch(url);

    const pokemons = await response.json();
    dispatch({type: FETCH_POKEMONS, pokemons: pokemons});
  };
};

export const fetchPokemon = url => {
  return async dispatch => {
    const response = await fetch(url);

    const pokemon = await response.json();
    dispatch({type: FETCH_POKEMON, pokemon: pokemon});
  };
};
