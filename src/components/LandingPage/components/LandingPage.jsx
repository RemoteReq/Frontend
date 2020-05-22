import React, { Component } from 'react';
import Navigation from '../../parts/Navigation1.jsx';
import LPHeader from './LPHeader.jsx';
import AboutHeader from './AboutHeader.jsx';
import AboutMain from './AboutMain.jsx';
import CallToAction from './CallToAction.jsx';
import Footer from '../../parts/Footer.jsx';

class LandingPage extends Component {
  render() {
    return (
        <div className='landingPage'>
          <Navigation/>
          <LPHeader />
          <AboutHeader />
          <AboutMain />
          <CallToAction />
          <Footer />
        </div>
    );
  }
}

export default LandingPage;