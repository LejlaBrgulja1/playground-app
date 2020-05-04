import React, { Fragment } from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Route, Switch, Redirect } from "react-router-dom";

import Generator from './Generator';
import GeneratedQuiz from './GeneratedQuiz';
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
    <Fragment>
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/generator" render={({history}) => <Generator history={history} />} />
            <Route exact path="/quiz/:id" component={GeneratedQuiz}/>}  />
            <Redirect from="/*" to="/" />
          </Switch>
        <Footer/>
      </Router>
    </Fragment>
  );}
}

export default App;
