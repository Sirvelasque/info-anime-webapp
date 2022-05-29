import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimes } from '../../redux/Companies/Companies';
import Categorie from './categorie';

import '../../css/Categories.css';

const chard = (anime) => {
  if (anime.length !== 0) {
    return (
      <Categorie
        id={anime.data.data.mal_id}
        name={anime.data.data.title}
        img={anime.data.data.images.webp.image_url}
        description={anime.data.data.synopsis}
        likes={anime.data.data.score}
      />
    );
  }
  return null;
};

const Categories = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.animes.length === 0) {
      dispatch(getAnimes());
    }
  }, []);
  const animeList = data.animes.filter((e) => {
    for (let i = 0; i < e.data.data.genres.length; i += 1) {
      if (e.data.data.genres[i].name === data.categorie) return true;
    }
    return false;
  });
  return (
    <div>
      <div className="categoriesChard">
        <h2>{data.categorie}</h2>
        {animeList.map((e) => chard(e))}
      </div>
    </div>
  );
};

export default Categories;
