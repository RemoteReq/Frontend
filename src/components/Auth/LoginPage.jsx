import React, { Component } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

const backend = 'http://3.21.186.204:3030';

const responseGoogle = (response) => {
  console.log(response);
};

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.updateInfoOnChange = this.updateInfoOnChange.bind(this);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();

    console.log('fire away!');

    axios.post(`${backend}/signup`,
      {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => console.log(response));
  }

  updateInfoOnChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
    });

    console.log(this.state);
  }

  render() {
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

          <div className="login-form" >
            <input
              name="username"
              className="login-email"
              onChange={ this.updateInfoOnChange }
              placeholder="Email" />
            <input
              type="password"
              name="password"
              className="login-password"
              onChange={ this.updateInfoOnChange }
              placeholder="Password" />
            <button onClick={ this.login }>Login</button>
            <a href="#">Forgot Password</a>
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;