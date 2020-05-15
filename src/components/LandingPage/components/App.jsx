import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import LPHeader from './LPHeader.jsx';
import AboutHeader from './AboutHeader.jsx';
import AboutMain from './AboutMain.jsx';
import CallToAction from './CallToAction.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LandingPageMenuVisible: false
    };

    this.menuClick = this.menuClick.bind(this);
    // this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  
  // componentDidMount() {
  //   window.addEventListener('resize', this.handleWindowResize())
  // }
  // handleWindowResize() {
  //   console.log(window.innerWidth)
  // }

  menuClick() {
    this.setState({ LandingPageMenuVisible: !this.state.LandingPageMenuVisible })
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

export default App;