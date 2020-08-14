import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import auth from '../../components/Auth/Auth.jsx';

// const responseGoogle = (response) => {
//   console.log(response);
// };

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
    };

    this.updateInfoOnChange = this.updateInfoOnChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    console.log(auth.isAuthenticated());
    if (auth.isAuthenticated()) {
      this.setState({
        redirectToReferrer: true,
        loginFailed: '',
      });
    }
  }

  login(e) {
    e.preventDefault();

    const body = {
      emailOrUserName: this.state.username,
      password: this.state.password,
    };

    auth.login(body, () => {
      this.setState({
        redirectToReferrer: true,
      });
    },
    () => {
      this.setState({
        loginFailed: true,
      });
    });
  }

  updateInfoOnChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
      loginFailed: false,
    });
  }

  render() {
    document.title = 'Sign In';
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return (
        <Redirect to ='dashboard' />
      );
    }

    return (
        <div className="login-form-page">
        <div className="login-container" >

          <form className="login-form" >
            <h3>Job Seeker Sign In</h3>

            <br/>

            <input
              name="username"
              autoComplete="current-username"
              className="login-email"
              onChange={ this.updateInfoOnChange }
              placeholder="Username or Email" />
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="login-password"
              onChange={ this.updateInfoOnChange }
              placeholder="Password" />

            <p className={
              `${this.state.loginFailed ? 'error' : 'hide'}`
            }>
              Incorrect Username/Email OR Password
            </p>

            <button onClick={ this.login }
                    className="button-1"
            >Sign in
            </button>

            <p className="small-paragraph">
              Are you an Employer? <Link to="/employer/signin">Sign In Here</Link>
            </p>

            <p className="small-paragraph">
              Don&apos;t have an account? <Link to="/signup" className="small-link">Sign Up</Link>
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

export default SignIn;