import React from 'react';
import PropTypes from 'prop-types';
import cat from '../scss/cat.module.scss';

const Description = ({ description }) => (
  <div className={cat.description}>
    <h5>CAT INFO</h5>
    <ul className={cat.circle}>
      {description.map((descr) => <li key={`${descr}-description`}>{descr}</li>)}
    </ul>
  </div>
);

Description.propTypes = {
  description: PropTypes.instanceOf(Array).isRequired,
};

export default Description;
