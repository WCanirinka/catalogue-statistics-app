/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import CatsList from '../containers/CatsList';
import CatFile from './CatFile';
import CategoriesList from '../containers/CategoriesList';
import Home from './Home';
import About from './About';

const App = (props) => {
  const [cats, setCats] = useState();
  const {
    chngFilter, cat, filter, addNewCat,
  } = props;

  const handleAddCat = () => {
    if (cats) {
      cats.cat.forEach((value) => {
        addNewCat(value);
      });
    }
  };

  useEffect(() => {
    let mounted = true;

    const loadCat = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');

      if (mounted) {
        setCats({
          cat: response.data.results.filter((cat) => cat === cat.adaptability),
        });

        handleAddCat();
      }
    };

    loadCat();

    return () => {
      mounted = false;
    };
  }, cats);

  const clickHandler = (value) => {
    chngFilter(value);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/catsList">
            <CatsList />
          </Route>
          <Route exact path="/categoriesList">
            <CategoriesList />
          </Route>
          <Route exact path="/catFile/:id">
            <CatFile
              chats={cat.filter((chats) => chats.id === filter.value[1])[0]}
              filter={filter}
              handleClick={clickHandler}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  addNewCat: PropTypes.func.isRequired,
  chngFilter: PropTypes.func.isRequired,
  cat: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
  }).isRequired,
};

export default App;
