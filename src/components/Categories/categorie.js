import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetails } from '../../redux/details/details';

const Categorie = (props) => {
  const {
    name, id, img, description, likes,
  } = props;
  const dispatch = useDispatch();

  const updateDetails = () => {
    dispatch(getDetails(id));
  };

  return (

    <div
      className="animeitem"
      key={id}
    >
      <NavLink to="/details" onClick={() => updateDetails()}>
        <div className="chardTitle">
          <img src={img} alt="Anime preview" />
          <div className="wrap">
            <h4>{name}</h4>
            <i className="fa-solid fa-heart">{likes}</i>
          </div>
        </div>
        <div className="description">
          {description}
        </div>
      </NavLink>
    </div>
  );
};

Categorie.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Categorie;
