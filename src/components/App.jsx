import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import LandingPage from './LandingPage/components/LandingPage.jsx';
import SignIn from './Auth/LoginPage.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component="signup" />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/QnA" component="questionnaire" />
        </Switch>
      </Router>
    );
  }
}

export default App;