import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect
} from 'react-router-dom';
import ScrollToTop from './parts/ScrollToTop.jsx';
import LandingPage from './LandingPage/components/LandingPage.jsx';
import { LoginPage, PrivateRoute } from './Auth/LoginPage.jsx';
import SignUp from './Auth/Registration.jsx';
import Navigation from './parts/Navigation1.jsx';
import Footer from './parts/Footer.jsx';
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
            <Route path="/signin" component={LoginPage} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/QnA" component="questionnaire" />
            <Route path="/mission" component={Mission} />
            <Route path="/findTalent" component={FindTalent} />
            <Route component={Page404} />
          </Switch>
          <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;