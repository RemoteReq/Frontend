import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const backend = 'http://3.21.186.204:3030';

const responseGoogle = (response) => {
  console.log(response);
};

const Auth = {
  isAuthenticated: false,
  authenticate(cb, creds) {
    this.isAuthenticated = true;
    
    axios.post(`${backend}/api/signin`, creds)
    .then((response) => {
      console.log('I hope this works!!', response);
      return response;
    })
    .then((response) => {
      if (response.status === 200) {
        cb();
      }
    })
  }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }} />
  )} />
)

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };

    this.updateInfoOnChange = this.updateInfoOnChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    
    const body = {
      username: this.state.username,
      password: this.state.password,
    };

    console.log('fire away!', body);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    Auth.authenticate(() => {
      this.setState({
        redirectToReferrer: true,
      }, () => {
        console.log('redirecting..')
      })
    }, body)
  }

  updateInfoOnChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true){
      return(
        <Redirect to ={from} />
      )
    }

    return (
        <div className="login-form-page">
        <div className="login-container" >
          <p>
            By continuing, you agree to our  <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </p>

          <div className="login-fb-google">
            {/*

            // commented out until this can be implemented
            <GoogleLogin
            clientId="1005468463474-snfb80jfo4sg40fdapbcguuoa6uvbqq1.apps.googleusercontent.com"
              buttonText="Sign In with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />

            */}
          </div>

          <form className="login-form" >
            <input
              name="username"
              autoComplete="current-username"
              className="login-email"
              onChange={ this.updateInfoOnChange }
              placeholder="Email" />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="login-password"
              onChange={ this.updateInfoOnChange }
              placeholder="Password" />
            <button onClick={ this.login }>Login</button>
            <a href="#">Forgot Password</a>
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}