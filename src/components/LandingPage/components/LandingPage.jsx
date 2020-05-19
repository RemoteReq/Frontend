import React, { Component } from 'react';
import Navigation from '../../parts/Navigation-1.jsx';
import LPHeader from './LPHeader.jsx';
import AboutHeader from './AboutHeader.jsx';
import AboutMain from './AboutMain.jsx';
import CallToAction from './CallToAction.jsx';
import Footer from '../../parts/Footer.jsx';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LandingPageMenuVisible: false,
    };

    this.menuClick = this.menuClick.bind(this);

  menuClick() {
    this.setState({ LandingPageMenuVisible: !this.state.LandingPageMenuVisible });
  }

  render() {
    return (
      <div className='landingPage'>
        <Navigation
          menuClick={this.menuClick}
          LandingPageMenuVisible={this.state.LandingPageMenuVisible}
        />
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