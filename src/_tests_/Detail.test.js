import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import {
  render,
  screen,
} from '@testing-library/react';
import React from "react";
import Details from "../components/Details";
import detailsReducer, { ONEDETAILS } from '../redux/details/details'
import { useDispatch } from 'react-redux';
import { store } from '../redux/ConfigureStore'
import animes from '../_mocks_/animes'

describe('Details test',() => {
  const dispatch = useDispatch();
  dispatch({
    type: ONEDETAILS,
    payload: animes,
  })
  const Jsx = () => (
    <Provider store={store}>
      <Details />
    </Provider>
  )
  it('Cowboy Bebop should be in the document', () => {
    const mockDetail = () => {
      render(Jsx());
    }
    mockDetail();
    expect(screen.getByText('Cowboy')).toBeInTheDocument();
  })
})

