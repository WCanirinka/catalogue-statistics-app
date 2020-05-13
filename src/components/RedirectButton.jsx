import React from 'react';
import PropTypes from 'prop-types';
import redirectButton from '../scss/redirectButton.module.scss';

const RedirectButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick} className={redirectButton.button}>
    Back to Cats Page
  </button>
);

RedirectButton.propTypes = {
  handleClick: PropTypes.func,
};

RedirectButton.defaultProps = {
  handleClick: () => null,
};

export default RedirectButton;
