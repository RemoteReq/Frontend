import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Link } from 'react-router-dom';
import GoogleSignIn from '#components/Auth/GoogleSignIn.jsx';
import Divider from '#components/parts/Divider.jsx';
import PasswordField from '#parts/PasswordField.jsx';
import auth from '../../components/Auth/Auth.jsx';
import Preloader from '#components/svgs/Preloader.jsx';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false,
      signUpInProgress: false,
    };

    this.updateInfoOnChange = this.updateInfoOnChange.bind(this);
    this.login = this.login.bind(this);
    this.enablePreloader = this.enablePreloader.bind(this);
  }

  componentDidMount() {
    const Footer = document.getElementById('footer');
    Footer.classList.add('hide');

    console.log(auth.isAuthenticated());
    if (auth.isAuthenticated()) {
      this.setState({
        redirectToReferrer: true,
        loginFailed: '',
      });
    }
  }

  componentWillUnmount() {
    const Footer = document.getElementById('footer');
    Footer.classList.remove('hide');
    Footer.classList.add('show');
  }

  enablePreloader() {
    this.setState({
      signUpInProgress: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          signUpInProgress: false,
        });
      }, 2000);
    });
  }

  login(e) {
    e.preventDefault();

    this.enablePreloader();

    const { username } = this.state;

    let user;

    if (username.includes('@')) {
      user = username.toLowerCase();
      console.log(user);
    } else {
      user = username;
    }

    const body = {
      emailOrUserName: user,
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
    const { redirectToReferrer } = this.state;
    const { signUpInProgress } = this.state;

    if (redirectToReferrer === true) {
      return (
        <Redirect to ='dashboard' />
      );
    }

    return (
        <div className="login-form-page">

        <Helmet>
          <title>Job Seeker Sign In | Remote Req</title>
          <meta
            name="description"
            content="Sign in to see your matches with organizations that have a similar mission. Find your next remote opportunity, now!"
          />
        </Helmet>

        <div className="login-container" >
          <h4>Make an impact, remotely.</h4>

          <form className="login-form" >
            <div className={`form-preloader ${signUpInProgress ? 'show' : 'hide'}`}>
              <Preloader color="blue"/>

              <p>Signing you in</p>
            </div>

            <h3>Job Seeker Sign In</h3>

            <br/>

            <input
              name="username"
              autoComplete="current-username"
              className="login-email"
              onChange={ this.updateInfoOnChange }
              placeholder="Username or Email" />

            <PasswordField
              onChange={ this.updateInfoOnChange }
            />

            {/* <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="login-password"
              onChange={ this.updateInfoOnChange }
              placeholder="Password" /> */}

            <p className={
              `${this.state.loginFailed ? 'error' : 'hide'}`
            }>
              Incorrect Username/Email OR Password
            </p>

            <button onClick={ this.login }
                    className="button-1"
            >Sign in
            </button>

            <GoogleSignIn />

            <p className="small-paragraph">
              Are you an employer? <Link to="/employer/sign-in">Sign In Here</Link>
            </p>

            <p className="small-paragraph">
              Don&apos;t have an account? <Link to="/sign-up" className="small-link">Sign Up</Link>
            </p>

            <p className="small-paragraph">
              <Link to="/forgot-password">Forgot your password?</Link>
            </p>

          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;