import React, { Component } from 'react';
import auth from '../../components/Auth/Auth.js'
import { Route, Redirect, Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

class SignIn extends Component {
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

  componentDidMount() {
    console.log(auth.isAuthenticated());
    if (auth.isAuthenticated()) {

      this.setState({
        redirectToReferrer: true
      });
    }
  }

  login(e) {
    e.preventDefault();
    
    const body = {
      username: this.state.username,
      password: this.state.password,
    };

    auth.login(body, () => {
      this.setState({
        redirectToReferrer: true
      })
    })
  }

  updateInfoOnChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true){
      return(
        <Redirect to ='dashboard' />
      )
    }

    return (
        <div className="login-form-page">
        <div className="login-container" >
          <p className="small-paragraph">
            By continuing, you agree to our
            &nbsp;<Link to="#" className="small-link">Terms of Use</Link> &nbsp;
            and 
            &nbsp;<Link to="#"className="small-link">Our Privacy Policy</Link>.
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
              Don't have an account? <Link to="/signup" className="small-link">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;