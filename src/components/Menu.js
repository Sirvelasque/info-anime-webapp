import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAnimes } from '../redux/Companies/Companies';
import { getDetails } from '../redux/details/details';
import { getCategorie } from '../redux/Categories/Categories';

import '../css/Menu.css';

let init = 0;

const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (init === 0) {
      dispatch(getAnimes());
      dispatch(getDetails(1));
      init = 2;
    }
  }, [dispatch]);

  const sendCategorie = async (cat) => {
    dispatch(getCategorie(cat));
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <NavLink to="Categories">
        <button type="button" className="genre Action" onClick={() => sendCategorie('Action')}>Action</button>
        <button type="button" className="genre Comedy" onClick={() => sendCategorie('Comedy')}>Comedy</button>
        <button type="button" className="genre Fantasy" onClick={() => sendCategorie('Fantasy')}>Fantasy</button>
        <button type="button" className="genre Gourmet" onClick={() => sendCategorie('Gourmet')}>Gourmet</button>
        <button type="button" className="genre Drama" onClick={() => sendCategorie('Drama')}>Drama</button>
        <button type="button" className="genre Slice" onClick={() => sendCategorie('Slice of life')}>Slice of life</button>
      </NavLink>
    </div>
  );
};

export default Menu;
