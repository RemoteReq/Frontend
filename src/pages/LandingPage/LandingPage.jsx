import React, { Component } from 'react';
import LPHeader from './LPHeader.jsx';
import AboutHeader from './AboutHeader.jsx';
import AboutMain from './AboutMain.jsx';
import CallToAction from './CallToAction.jsx';

class LandingPage extends Component {
  render() {
    return (
        <div className='landingPage'>
          <LPHeader />
          <AboutHeader />
          <AboutMain />
          <CallToAction />
        </div>
    );
  }
}

export default LandingPage;