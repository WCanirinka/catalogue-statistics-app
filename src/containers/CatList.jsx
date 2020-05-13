/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import reduxActions from '../redux/actions/index';
import Cat from '../components/Cat';
import Spinner from '../components/Spinner';
import CategoryFilter from '../components/CategoryFilter';
import catList from '../scss/catList.module.scss';
import { initialize } from '../helper/index';


const {
  addCats, addCategories, toggleSpinner, changeFilter,
} = reduxActions;

const CatList = (props) => {
  const {
    catReducer,
    categoryReducer,
    spinnerReducer,
    filterReducer,
    changeFilter,
  } = props;

  const makeRequest = () => {
    initialize(props);
  };

  useEffect(makeRequest, []);

  const catsFilter = filterReducer === 'All Categories'
    ? catReducer
    : catReducer.filter(cat => cat.origin === filterReducer);

  const showCats = !spinnerReducer ? (
    <div className={catList.catListContainer}>
      <CategoryFilter
        filter={filterReducer}
        categories={categoryReducer}
        changeFilter={changeFilter}
      />

      <div className={catList.catList}>
        {catsFilter.map((cat) => (
          <Cat key={cat.id} cat={cat} filterReducer={filterReducer} />
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  );

  return showCats;
};

CatList.propTypes = {
  addCats: PropTypes.func,
  addCategories: PropTypes.func,
  toggleSpinner: PropTypes.func,
  catReducer: PropTypes.instanceOf(Array),
  categoryReducer: PropTypes.instanceOf(Array),
  spinnerReducer: PropTypes.bool,
  filterReducer: PropTypes.string,
};

CatList.defaultProps = {
  addCats: () => null,
  addCategories: () => null,
  toggleSpinner: () => null,
  catReducer: [],
  categoryReducer: [],
  spinnerReducer: true,
  filterReducer: 'All Categories',
};

const mapDispatchToProps = (dispatch) => ({
  addCats: (cats) => dispatch(addCats(cats)),
  addCategories: (categories) => dispatch(addCategories(categories)),
  toggleSpinner: () => dispatch(toggleSpinner()),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

const mapStateToProps = ({
  catReducer,
  categoryReducer,
  spinnerReducer,
  filterReducer,
}) => ({
  catReducer,
  categoryReducer,
  spinnerReducer,
  filterReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(CatList);
