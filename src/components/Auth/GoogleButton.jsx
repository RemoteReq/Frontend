import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import GoogleLogo from '#assets/images/pngs/google-btn.png';

// can only use Production URL in localhost and production due to app setup in Google services
const backend = process.env.BASE_URL;

// const onSuccess = (response) => {
//   console.log('google sign in success!', response);

//   const profile = response.profileObj;

//   return (
//     <Redirect
//       to={{
//         pathname: '/dashboard',
//         state: {
//           profile,
//         },
//       }}
//     />
//   );
// };

// const onFailure = (error) => {
//   console.log('google sign in error!', error);
// };

class GoogleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      profile: {},
    };

    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess(response) {
    console.log('method logging in works!', response);

    this.setState({
      isLoggedIn: true,
      profile: response.profileObj,
    });
  }

  onFailure(error) {
    console.log('method failure works at least', error);

    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    const { isLoggedIn, profile } = this.state;

    return (

      isLoggedIn

        ? <Redirect
          to={{
            pathname: '/dashboard',
            state: {
              isLoggedIn,
              profile,
            },
          }}
        />

        : <GoogleLogin
        clientId="106530052018-epup7ot9lju37ugc54kjerd79av1pat0.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={this.onSuccess}
        onFailure={this.onFailure}
        isSignedIn={true}
        redirectUri={'/dashboard'}
        className="google-button"
      />

    );
  }
}

export default GoogleButton;