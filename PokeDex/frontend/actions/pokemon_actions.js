
import {fetchAllPokemon} from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_All_POKEMON";


export const receiveAllPokemon = (pokemon) => ({
 type: RECEIVE_ALL_POKEMON,
 pokemon: pokemon, 
});


export const requestAllPokemon = () => (dispatch, getState) => (
  fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

window.requestAllPokemon = requestAllPokemon;
