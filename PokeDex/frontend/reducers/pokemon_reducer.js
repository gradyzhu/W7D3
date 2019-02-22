import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { REQUEST_ALL_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'react-redux';

// left off here
const pokemonReducer = (oldState ={}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return oldState;
  }
};

export default pokemonReducer;