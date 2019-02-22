import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util';
import {configureStore} from './store/store';
import {receiveAllPokemon} from './actions/pokemon_actions';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';


document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById("root");
  // the entire store, including reducers middleware
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // we are passing redux into our root component
  ReactDOM.render(<Root store={store}/>, root);
});
