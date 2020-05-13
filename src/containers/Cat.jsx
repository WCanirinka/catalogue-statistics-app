/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import NotFound from '../components/error';
import RedirectButton from '../components/RedirectButton';
import cat from '../scss/cat.module.scss';
import { showCatsPage } from '../helper/index';

const Cat = (props) => {
  const { catReducer, match } = props;
  const {
    params: { id },
  } = match;

  // const catDescription = [];

  const sampleCat = catReducer.find((cat) => cat.id === id);

  const showCat = sampleCat ? (
    <div className={cat.sampleCat}>
      <div className={cat.cat}>
        <div className={cat.catIntelligence}>
          <h3>Name:</h3>
          <h4>{sampleCat.name}</h4>
          <p>{sampleCat.description}</p>
        </div>
      </div>
      <RedirectButton handleClick={() => showCatsPage(props)} />
    </div>
  ) : (
    <NotFound showCatsPage={() => showCatsPage(props)} />
  );

  return showCat;
};

Cat.propTypes = {
  cat: PropTypes.instanceOf(Object),
  catReducer: PropTypes.instanceOf(Array).isRequired,
};

Cat.defaultProps = {
  cat: {},
};

const mapStateToProps = ({ catReducer }) => ({
  catReducer,
});

export default withRouter(connect(mapStateToProps)(Cat));
