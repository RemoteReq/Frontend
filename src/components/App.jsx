import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import LandingPage from './LandingPage/components/LandingPage.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component="homepage"/>
          <Route path="signin" component="signin" />
          <Route path="signup" component="signup" />
          <Route path="dashboard" component="dashboard" />
          <Route path="QnA" component="questionnaire" />
        </Switch>
      </Router>
    );
  }
}

export default App;