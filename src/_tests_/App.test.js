import React from 'react';
import mockAxios from 'axios';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { act } from 'react-test-renderer';
import store from '../redux/ConfigureStore';
import App from '../App';

jest.mock('axios');
const CategorieMuck = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
};

describe('Render and interaction', () => {
  afterEach(cleanup);
  test('render testing', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        data: {
          mal_id: 1,
          title: 'Cowboy Bebop',
          rank: 37,
          year: 1998,
          score: 8,
          scored_by: 800,
          popularity: 42,
          genres: [
            {
              name: 'Drama',
            },
          ],
          images: {
            webp: {
              image_url: '',
            },
            jpg: {
              large_image_url: '',
            },
          },

        },
      },
    }));
    await act(() => {
      CategorieMuck();
    });
    expect(screen.getByText(/Drama/i)).toBeInTheDocument();
    expect(screen.getByText(/Action/i)).toBeInTheDocument();
    expect(screen.getByText(/Gourmet/i)).toBeInTheDocument();
    expect(screen.getByText(/Slice of Life/i)).toBeInTheDocument();
    expect(screen.getByText(/Fantasy/i)).toBeInTheDocument();
  });

  test('Change category from default to drama', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        data: {
          mal_id: 1,
          title: 'Cowboy Bebop',
          rank: 37,
          year: 1998,
          score: 8,
          scored_by: 800,
          popularity: 42,
          genres: [
            {
              name: 'Drama',
            },
          ],
          images: {
            webp: {
              image_url: '',
            },
            jpg: {
              large_image_url: '',
            },
          },

        },
      },
    }));
    await act(() => {
      CategorieMuck();
    });

    const dramaBtn = screen.getByText(/Drama/i);
    await act(() => {
      fireEvent.click(dramaBtn);
    });

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    const { categorie } = store.getState();
    expect(categorie).toBe('Drama');
  });
});
