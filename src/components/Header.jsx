/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { withRouter } from 'react-router';
import CatLogo from '../assets/cat-logo.jpg';
import header from '../scss/header.module.scss';
import { showCatsPage } from '../helper/index';


const Header = (props) => (
  <header className={header.header}>
    <div
      className={header.icon}
      onClick={() => showCatsPage(props)}
      onKeyPress={() => showCatsPage(props)}
      role="button"
      tabIndex="0"
    >
      <img src={CatLogo} alt="cat-logo" />
      <h3>Cat Haven</h3>
    </div>
  </header>
);

export default withRouter(Header);
