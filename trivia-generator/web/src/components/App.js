import React from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Route, Switch } from "react-router-dom";

import Generator from './Generator';

function App() {
  return (
    <div>
      <Header/>
      {/* <Router>
        <div>
          <Route path="/" render={Home} />
          <Route path="/generator" render={Generator} />
        </div>
      </Router> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/generator">
            <Generator/>
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
