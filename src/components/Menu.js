import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnimes } from '../redux/Companies/Companies';
import { getDetails } from '../redux/details/details';
import { getCategorie } from '../redux/Categories/Categories';
import Loading from './loadingS';

import '../css/Menu.css';

let init = 0;

const Menu = () => {
  const data = useSelector((state) => state.animes)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    if(data.length >= 9){
      setLoading(false);
    }
    if (init === 0) {
      dispatch(getDetails(1));
      setTimeout(() => {dispatch(getAnimes())}, 500);
      init = 2;
      console.log('repeat');
    };
    if(loading === true) setTimeout(() => setLoading(false), 5000)
  }, [dispatch, loading, data]);

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
        <button type="button" className="genre Slice" onClick={() => sendCategorie('Slice of Life')}>Slice of life</button>
      </NavLink>
      {loading===false ? <br /> : <Loading />}
    </div>
  );
};

export default Menu;
