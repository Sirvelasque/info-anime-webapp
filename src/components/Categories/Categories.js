import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAnimes } from '../../redux/Companies/Companies';
import Categorie from './categorie'; // Assuming the renaming for clarity
import Loading from '../loadingS';
import '../../css/Categories.css';

const renderAnimeCard = (anime) => {
  const {
    mal_id: malId, // Renaming `mal_id` to `malId` to comply with camelCase
    title,
    images,
    synopsis,
    score,
  } = anime.data.data;

  return (
    <Categorie
      id={malId} // using the camelCase variable here
      name={title}
      img={images.webp.image_url}
      description={synopsis}
      likes={score}
      key={malId} // and here
    />
  );
};

const Categories = () => {
  const animes = useSelector((state) => state.animes);
  const categorie = useSelector((state) => state.categorie);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // Dispatch action to get data if we don't have it and manage loading state
  useEffect(() => {
    if (animes.length === 0) {
      setLoading(true);
      dispatch(getAnimes());
    }
  }, [animes.length, dispatch]);

  // Automatically set loading to false when animes are fetched
  useEffect(() => {
    if (animes.length > 0 && loading) {
      setTimeout(() => setLoading(false), 4500);
      // Consider moving this timeout logic closer to your data fetching logic
    }
  }, [animes.length, loading]);

  // Filter with actual category
  const animeList = animes
    .filter((anime) => anime.data.data.genres.some((genre) => genre.name === categorie));

  return (
    <div>
      {loading ? <Loading /> : (
        <div className="categoriesChard">
          <h2>{categorie}</h2>
          {animeList.map(renderAnimeCard)}
        </div>
      )}
    </div>
  );
};

export default Categories;
