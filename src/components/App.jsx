import React from 'react';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
