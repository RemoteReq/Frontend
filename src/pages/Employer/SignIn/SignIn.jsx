import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ESignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="e-signin-form-page">
      <div className="e-signin-container" >
        <p className="small-paragraph">
          By continuing, you agree to our
          &nbsp;<Link to="#" className="small-link">Terms of Use</Link> &nbsp;
          and
          &nbsp;<Link to="#"className="small-link">Our Privacy Policy</Link>.
        </p>
        <div className="e-signin-fb-google">
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

        <form className="e-signin-form" >
          <input
            name="username"
            autoComplete="current-username"
            className="e-signin-email"
            onChange={ this.updateInfoOnChange }
            placeholder="Username" />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            className="login-password"
            onChange={ this.updateInfoOnChange }
            placeholder="Password" />
          <button onClick={ this.login }
                  className="button-1"
          >Sign in
          </button>
          {/* <Link to="#">Forgot your Password?</Link> */}
          <p className="small-paragraph">
            Don&apos;t have an account? <Link to="/employer/signup" className="small-link">Sign Up</Link>
          </p>

          <p className="small-paragraph">
            <Link to="/forgotPassword">Forgot your password?</Link>
          </p>
        </form>
      </div>
    </div>
    );
  }
}

export default ESignIn;