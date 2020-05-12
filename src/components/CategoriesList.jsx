import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoriesList = (props) => {
  const { changeFilter, filter, cats } = props;

  const handleClick = (value) => {
    changeFilter(value);
  };

  return (
    <div>
      <h1>Filter by Adaptability</h1>
      <div className="filtering">
        {filter.adaptability.map((value) => (
          <Link to="/catsList" key={value}>
            <button key={value} type="button" className="filter-value" onClick={() => handleClick([1, value])}>
              {value}
            </button>
          </Link>
        ))}
      </div>

      <h1>Select Cat by Name: </h1>
      <div>
        {cats.map((cat) => (
          <Link to={`/catFile/${cat.id}`} key={cat.id}>
            <button key={cat.id} type="button" className="filter-value" onClick={() => handleClick([2, cat.id])}>
              {cat.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

CategoriesList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    adaptability: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CategoriesList;
