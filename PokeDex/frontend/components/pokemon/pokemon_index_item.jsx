import React from 'react';
import {Link} from 'react-router-dom';


export const PokemonIndexItem = ({pokemon:{ id, name, image_url}}) => {
  return (
  <li>
    <Link to={`/pokemon/${id}`}> {name}
     <img src={image_url}/>
    </Link>
  </li>);
}

