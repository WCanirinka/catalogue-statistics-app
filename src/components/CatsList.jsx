import React from 'react';
import PropTypes from 'prop-types';
import Cat from './Cat';
import Header from './Header';

const CatsList = (props) => {
  const { cats, filter, changeFilter } = props;

  const handleClick = (value) => {
    changeFilter(value);
  };

  if (cats.length >= 190) {
    return (
      <div>
        <Header title={filter.value[1]} />
        <div className="cats-list">
          {cats.map((cat) => {
            if ((filter.value[0] === 0 && cat.adaptability === filter.value[1])) {
              return (
                <div key={cat.id}>
                  <Cat cat={cat} handleClick={handleClick} />
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1 className="fetching-header">Fetching Data</h1>
        <img src="" alt="Fetching" className="fetch-img" />
        <h2 className="fetching-wait">Wait Processing...</h2>
      </div>
    </div>
  );
};

CatsList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.objectOf(PropTypes.array).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default CatsList;
