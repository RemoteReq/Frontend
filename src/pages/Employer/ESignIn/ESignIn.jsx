import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import EAuth from '../EAuth/EAuth.jsx';

class ESignIn extends Component {
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
    console.log(EAuth.isAuthenticated());
    if (EAuth.isAuthenticated()) {
      this.setState({
        redirectToReferrer: true,
      });
    }
  }

  login(e) {
    e.preventDefault();

    const body = {
      emailOrUserName: this.state.username,
      password: this.state.password,
    };

    EAuth.login(body, () => {
      this.setState({
        redirectToReferrer: true,
      });
    }, () => {
      this.setState({
        loginFailed: true,
      });
    });
  }

  updateInfoOnChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return (
        <Redirect to="dashboard" />
      );
    }

    return (
      <div className="e-signin">
      <div className="e-signin-container" >

        <form className="e-signin-form" >
          <input
            name="username"
            autoComplete="current-username"
            className="e-signin-email"
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
                  className="e-button"
          >Sign in
          </button>

          <p className="small-paragraph">
            Are you a job seeker? <Link to="/signin">Sign In Here</Link>
          </p>

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