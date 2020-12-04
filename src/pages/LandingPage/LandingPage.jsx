import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import LPHeader from './LPHeader.jsx';
import AboutHeader from './AboutHeader.jsx';
import AboutMain from './AboutMain.jsx';
import CallToAction from './CallToAction.jsx';
import Disclaimer from './Disclaimer.jsx';

class LandingPage extends Component {
  render() {
    return (
        <div className='landingPage'>
          <Helmet>
            <title>Mission-Focused Remote Work | RemoteReq</title>
            <meta
              name="description"
              content="We connect remote job seekers with mission-focused organizations through a match-making process. Sign up and find your match today!"
            />
          </Helmet>

          <Disclaimer />
          <LPHeader />
          <AboutHeader />
          <AboutMain />
          <CallToAction />
        </div>
    );
  }
}

export default LandingPage;