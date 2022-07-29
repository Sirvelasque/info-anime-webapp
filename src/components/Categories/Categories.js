import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimes } from '../../redux/Companies/Companies';
import Categorie from './categorie';
import Loading from '../loadingS';

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
        key={anime.data.data.mal_id}
      />
    );
  }
  return null;
};

const Categories = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Go to loading state on refresh
  useEffect(() => {
    if (data.animes.length === 0 && !loading) setLoading(() => true);
  }, [data.animes.length, loading]);

  // Dispatch action to get data in case we don't have it and timeOut loading shift
  useEffect(() => {
    if (data.animes.length === 0) {
      dispatch(getAnimes());
    }
    if (loading === true) setTimeout(() => setLoading(false), 4500);
  }, [data.animes.length, dispatch, loading]);

  // Filter with actual category
  const animeList = data.animes.filter((e) => {
    for (let i = 0; i < e.data.data.genres.length; i += 1) {
      if (e.data.data.genres[i].name === data.categorie) return true;
    }
    return false;
  });

  return (
    <div>
      {loading ? <Loading />
        : (
          <div className="categoriesChard">
            <h2>{data.categorie}</h2>
            {animeList.map((e) => chard(e))}
          </div>
        )}
    </div>
  );
};

export default Categories;
