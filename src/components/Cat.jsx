import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cat = (props) => {
  const { cat, handleClick } = props;
  const { id, name, image } = cat;

  const clickHandler = (value) => {
    handleClick(value);
  };

  return (
    <div className="cat-container">
      <h2 className="cat-name">{name}</h2>
      <Link to={`/catfile/${id}`}>
        <button className="cat-btn" type="button" onClick={() => clickHandler([2, id])}>
          <img src={image} alt={name} className="cat-image" />
        </button>
      </Link>
    </div>
  );
};

Cat.propTypes = {
  handleClick: PropTypes.func.isRequired,
  cat: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    intelligence: PropTypes.string,
    image: PropTypes.string,
    temperament: PropTypes.string,
    adaptability: PropTypes.string,
    weight: PropTypes.string,
  }).isRequired,
};

export default Cat;
