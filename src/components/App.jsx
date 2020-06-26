import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect
} from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';
import ScrollToTop from './parts/ScrollToTop.jsx';
import LoginPage from './Auth/LoginPage.jsx';
import SignUp from './Auth/Registration.jsx';
import Navigation from './parts/Navigation1.jsx';
import Footer from './parts/Footer.jsx';

import LandingPage from '../pages/LandingPage/LandingPage.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Mission from '../pages/Mission/Mission.jsx';
import FindTalent from '../pages/FindTalent.jsx';
import Page404 from '../pages/Page404.jsx';

class App extends Component {
  render() {

    return (
      <Router>
        <ScrollToTop>
          <Navigation/>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/signin" component={LoginPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/QnA" component="questionnaire" />
              <Route exact path="/mission" component={Mission} />
              <Route exact path="/findTalent" component={FindTalent} />
              <ProtectedRoute exact path="/dashboard" component={Dashboard} />
              <Route component={Page404} />
            </Switch>
          <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;