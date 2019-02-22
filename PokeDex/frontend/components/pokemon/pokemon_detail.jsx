import React from 'react';

export const PokemonDetail = (props) => {
  return(
    <ul>
      <li>{props.pokemon.attack}</li>
      <li>{props.pokemon.defense}</li>
      <li>{props.pokemon.poke_type}</li>
      <li>{props.pokemon.moves}</li>
      <li>{props.pokemon.item_ids}</li>
    </ul>
  )
}