import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import LandingPage from './LandingPage/components/LandingPage.jsx';
import SignIn from './Auth/Auth.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component="signup" />
          <Route path="/dashboard" component="dashboard" />
          <Route path="/QnA" component="questionnaire" />
        </Switch>
      </Router>
    );
  }
}

export default App;