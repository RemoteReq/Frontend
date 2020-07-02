import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute.jsx';

// Navs
import ScrollToTop from './parts/ScrollToTop.jsx';
import Navigation from './parts/Navigation1.jsx';
import Footer from './parts/Footer.jsx';

// Pages
import SignIn from '../pages/SignIn/SignIn.jsx';
import SignUp from '../pages/SignUp/SignUp.jsx';
import Settings from '../pages/Settings/Settings.jsx';
import LandingPage from '../pages/LandingPage/LandingPage.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import Mission from '../pages/Mission/Mission.jsx';
import FindTalent from '../pages/FindTalent.jsx';
import Page404 from '../pages/Page404.jsx';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassord.jsx';
import ResetPassword from '../pages/ResetPassword/ResetPassword.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navigation/>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/QnA" component="questionnaire" />
              <Route exact path="/mission" component={Mission} />
              <Route exact path="/findTalent" component={FindTalent} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
              <Route exact path="/resetPassword" component={ResetPassword} />
              <ProtectedRoute exact path="/settings" component={Settings} />
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