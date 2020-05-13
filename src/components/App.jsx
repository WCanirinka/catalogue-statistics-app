/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import CatsList from '../containers/CatList';
import Cat from '../containers/Cat';
import '../scss/index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={CatsList} />
        <Route exact path="/:id" component={Cat} />
      </Switch>
    </div>
  );
}

export default App;
