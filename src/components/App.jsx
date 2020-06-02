import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import LandingPage from './LandingPage/components/LandingPage.jsx';
import SignIn from './Auth/LoginPage.jsx';
import SignUp from './Auth/Registration.jsx';
import Navigation from './parts/Navigation1.jsx';
import Footer from './parts/Footer.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Mission from '../pages/Mission/Mission.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/QnA" component="questionnaire" />
          <Route path="/mission" component={Mission} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App;