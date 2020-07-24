import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
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
import Employer from '../pages/Employer/Employer.jsx';
import Verify from '../pages/Verify/Verify.jsx';
import QnA from '../pages/QnA/QnA.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navigation/>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/employer" component={Employer} />
              <Route path="/QnA" component="questionnaire" />
              <Route path="/mission" component={Mission} />
              <Route path="/findTalent" component={FindTalent} />
              <Route path="/forgotPassword" component={ForgotPassword} />
              <Route path="/resetPassword" component={ResetPassword} />
              <Route path="/userEmailVerify" component={Verify} />
              <Route path="/questionnaire" component={QnA} />
              <ProtectedRoute path="/settings" component={Settings} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route component={Page404} />
            </Switch>
          <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;