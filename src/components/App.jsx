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
import EVerify from '../pages/Employer/EVerify/EVerify.jsx';
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx';
import TermsOfUse from '../pages/TermsOfUse.jsx';

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
              <Route path="/about" component={Mission} />
              <Route path="/findTalent" component={FindTalent} />
              <Route path="/forgotPassword" component={ForgotPassword} />
              <Route path="/resetPassword" component={ResetPassword} />
              <Route path="/userEmailVerify" component={Verify} />
              <Route path="/employerEmailVerify" component={EVerify} />
              <Route path="/privacyPolicy" component={PrivacyPolicy} />
              <Route path="/termsOfUse" component={TermsOfUse} />
              <ProtectedRoute path="/QnA" component={QnA} />
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