import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const CatFile = (props) => {
  const { cat } = props;
  const {
    name, image, description, intelligence, temperament, adaptability,
  } = cat;

  //   const clickHandler = (value, render) => {
  //     handleClick(value, render);
  //   };

  return (
    <div>
      <Header title={name} />
      <div className="cat-file-container">
        <div className="cat-img-container">
          <img src={image} alt={name} className="cat-img" />
        </div>
        <div className="cat-data">
          <h1>{name}</h1>
          <h2>
            {`Intelligence: ${intelligence}`}
          </h2>
          <h2>
            {`Adaptability: ${adaptability}`}
          </h2>
          <h2>
            {`Temperament: ${temperament}`}
          </h2>
          <div className="cat-descr">
            {`Description: ${description}`}
          </div>
        </div>
      </div>
    </div>
  );
};

CatFile.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    intelligence: PropTypes.string,
    image: PropTypes.string,
    temperament: PropTypes.string,
    adaptability: PropTypes.string,
    weight: PropTypes.string,
  }),
};

CatFile.defaultProps = {
  cat: null,
};

export default CatFile;
