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
import Employer from '../pages/Employer/Employer.jsx';
import Verify from '../pages/Verify/Verify.jsx';
import QnA from '../pages/QnA/QnA.jsx';
import EVerify from '../pages/Employer/EVerify/EVerify.jsx';
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx';
import TermsOfUse from '../pages/TermsOfUse.jsx';
import DevBanner from './parts/DevBanner.jsx';
import EResetPassword from '../pages/Employer/EResetPassword/EResetPassword.jsx';
import StatelessJobViewer from '../pages/Dashboard/StatelessJobViewer.jsx';
import IsHired from '../pages/Employer/IsHired/IsHired.jsx';
import ThankYou from '../pages/ThankYou/ThankYou.jsx';
import RequestADemo from '../pages/RequestADemo.jsx';

const ENV_STATE = process.env.NODE_ENV;

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <DevBanner env={ENV_STATE}/>
          <Navigation/>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/employer" component={Employer} />
              <Route path="/about-us" component={Mission} />
              <Route path="/find-talent" component={FindTalent} />
              <Route path="/request-a-demo" component={RequestADemo} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/resetPassword" component={ResetPassword} />
              <Route path="/userEmailVerify" component={Verify} />
              <Route path="/employerEmailVerify" component={EVerify} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-of-Use" component={TermsOfUse} />
              <Route path="/job" component={StatelessJobViewer} />
              <Route path="/isHired" component={IsHired} />
              <Route path="/afterSignUp" component={ThankYou} />
              <Route path="/employerResetPassword" component={EResetPassword} />
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