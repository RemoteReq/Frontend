import React, { Component } from 'react';
import LPHeader from './LPHeader.jsx';
import AboutHeader from './AboutHeader.jsx';
import AboutMain from './AboutMain.jsx';
import CallToAction from './CallToAction.jsx';
import Disclaimer from './Disclaimer.jsx';

class LandingPage extends Component {
  render() {
    document.title = 'RemoteReq | Home';
    return (
        <div className='landingPage'>
          {/* <Disclaimer /> */}
          <LPHeader />
          <AboutHeader />
          <AboutMain />
          <CallToAction />
        </div>
    );
  }
}

export default LandingPage;