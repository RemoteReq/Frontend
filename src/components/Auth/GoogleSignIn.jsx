import React, { Component } from 'react';
import axios from 'axios';
import GoogleLogo from '#assets/images/pngs/google-btn.png';

// can only use Production URL in localhost and production due to app setup in Google services
const backend = process.env.BASE_URL;

class GoogleSignIn extends Component {
  SignIn(e) {
    e.preventDefault();

    console.log('yee');

    const google = () => { return window.location.href = `${backend}/login/google`; };

    google().then(() => { return console.log(response); });

    // axios.get(`${backend}/login/google`, {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': true,
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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