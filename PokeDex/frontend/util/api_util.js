import receiveAllPokemon from '../actions/pokemon_actions';

export const fetchAllPokemon = () => {
  return $.ajax( {
    type: "GET",
    url: "http://localhost:3000/api/pokemon"
  });
}

// ajax calls only