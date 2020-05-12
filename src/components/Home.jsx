import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="App">
    <div id="init">
      <h1 className="app-title">Welcome to Cats Info</h1>
      <Link to="/playersList">
        <button type="submit" className="app-btn">
          Open Cats Info
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
