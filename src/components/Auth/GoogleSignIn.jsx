import React, { Component } from 'react';
import axios from 'axios';
import GoogleLogo from '#assets/images/pngs/google-btn.png';

// can only use Production URL in localhost and production due to app setup in Google services
const backend = process.env.BASE_URL;

class GoogleSignIn extends Component {
  SignIn(e) {
    e.preventDefault();

    console.log('yee');

    axios.get(backend)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
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