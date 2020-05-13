import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import catList from '../scss/catList.module.scss';

const CategoryFilter = ({ categories, changeFilter, filter }) => {
  const history = useHistory();
  const handleChange = (e) => {
    changeFilter(e.target.value);
    history.push('/');
  };

  return (
    <div className={catList.catListContainer}>
      <select onChange={handleChange} value={filter}>
        <option value="All Categories">All Categories</option>
        {categories.map((strCategory) => (
          <option value={strCategory} key={strCategory}>
            {strCategory || 'None'}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.instanceOf(Array),
  changeFilter: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

CategoryFilter.defaultProps = {
  categories: [],
  changeFilter: () => null,
};

export default CategoryFilter;
