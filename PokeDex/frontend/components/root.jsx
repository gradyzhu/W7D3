import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  // all react components will have access to redux state
  // provider is react-redux method that is used to pass store
  // props to every component within the.
  <Provider store={store}>
   <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
   </HashRouter>
  </Provider>
);

export default Root;