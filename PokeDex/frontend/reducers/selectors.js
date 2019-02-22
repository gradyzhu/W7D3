// selectors used to select a particular slice of state

// method takes current_state
export const selectAllPokemon = (state) => {
  // returns pokemon through the state.
  return Object.values(state.entities.pokemon);
};

window.selectAllPokemon = selectAllPokemon;