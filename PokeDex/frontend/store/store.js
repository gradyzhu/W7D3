import {createStore, applyMiddleware} from 'redux';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';
import {logger} from 'redux-logger';

//wrap createStore in function
export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk,logger));
};
