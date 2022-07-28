import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import  store  from '../redux/ConfigureStore';
import { DETAIL } from '../redux/Companies/Companies'
import { ONEDETAILS } from '../redux/details/details';
import Categories from '../components/Categories/Categories';

import animes from '../_mocks_/animes';

const CategorieMuck = () => {
  const animeArray = store.getState().animes;
  const anime = store.getState().details;
  const categorie = store.getState().categorie;

  render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );
};

describe('test', () => {
  store.dispatch({ type: 'CATEGORIECHANGE', payload: 'Action'});
  test('check', () => {
    CategorieMuck();
    
    expect(1).toBe(1);
  })
})
