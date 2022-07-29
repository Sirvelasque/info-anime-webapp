import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import companiesReducer from './Companies/Companies';
import detailsReducer from './details/details';
import categorieReducer from './Categories/Categories';

const reducers = combineReducers({
  animes: companiesReducer,
  details: detailsReducer,
  categorie: categorieReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
