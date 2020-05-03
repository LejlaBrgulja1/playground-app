import React, { Fragment } from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { Route, Switch } from "react-router-dom";

import Generator from './Generator';
import Quiz from './Quiz';

class App extends React.Component {

  state = { quiz: {} }

  constructor(props) {
    super(props);
  }

  setQuiz = (questiions) => {
    this.setState({ quiz: questiions });
  }

  render(){
    return (
    <Fragment>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/generator">
            <Generator setQuiz={this.setQuiz} />
          </Route>
          <Route exact path="/quiz">
            <Quiz quiz={this.state.quiz} />
          </Route>
        </Switch>
      <Footer/>
    </Fragment>
  );}
}

export default App;
