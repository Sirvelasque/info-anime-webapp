import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import companiesReducer from './companies/companies';
import detailsReducer from './details/details';
import categorieReducer from './categorie/categorie';

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
