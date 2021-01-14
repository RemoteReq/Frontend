import React, { Component } from 'react';
import axios from 'axios';
import GoogleLogo from '#assets/images/pngs/google-btn.png';

// can only use Production URL in localhost and production due to app setup in Google services
const backend = 'https://api.remotereq.com/login/google';

class GoogleSignIn extends Component {
  SignIn(e) {
    e.preventDefault();

    axios.get(backend)
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <button
        className="google-button"
        onClick={(e) => { return this.SignIn(e); }}
      >
        <img src={GoogleLogo}/>
        Sign In with Google
      </button>
    );
  }
}

export default GoogleSignIn;