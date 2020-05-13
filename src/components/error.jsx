import React from 'react';
import PropTypes from 'prop-types';
import RedirectButton from './RedirectButton';
import cat from '../scss/cat.module.scss';

const NotFound = ({ showCatsPage }) => (
  <div className={cat.notFound}>
    <h2>404</h2>
    <p>Cat Not Found</p>
    <RedirectButton handleClick={showCatsPage} />
  </div>
);

NotFound.propTypes = {
  showCatsPage: PropTypes.func,
};

NotFound.defaultProps = {
  showCatsPage: () => null,
};

export default NotFound;
