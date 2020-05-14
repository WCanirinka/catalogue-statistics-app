/* eslint-disable arrow-parens */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import catStyles from '../scss/cat.module.scss';

const Cat = props => {
  const { cat } = props;

  const { name, description } = cat;

  const showCatPage = ({ id }) => props.history.push(`/${id}`);

  return (
    <div
      className={catStyles.cat}
      onClick={() => showCatPage(cat)}
      onKeyPress={() => showCatPage(cat)}
      role="button"
      tabIndex="0"
    >
      <div className={catStyles.catContent}>
        <h4>{name}</h4>
      </div>
      <div className={catStyles.descrContainer}>
        <p>{description}</p>
      </div>
    </div>
  );
};

Cat.propTypes = {
  cat: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Cat);
