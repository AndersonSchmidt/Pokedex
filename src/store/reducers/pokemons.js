import {FETCH_POKEMONS, FETCH_POKEMON} from '../actions/pokemons';

const initialState = {
  pokemons: {},
  pokemon: {},
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {...state, pokemons: action.pokemons};
    case FETCH_POKEMON:
      return {...state, pokemon: action.pokemons};
  }
  return state;
};

export default pokemonReducer;
