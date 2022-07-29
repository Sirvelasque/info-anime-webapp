import PropTypes from 'prop-types';

const Companie = (props) => {
  const { name, id } = props;

  return (
    <div
      className="menuChard"
      key={id}
    >
      <div className="chardTitle">
        {name}
        {id}
      </div>
    </div>
  );
};

Companie.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Companie;
