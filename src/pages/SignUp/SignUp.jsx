import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Preloader from '../../components/svgs/Preloader.jsx';

const backend = 'https://api.remotereq.com';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmailValid: true,
      doPasswordsMatch: true,
      signUpInProgress: false,
    };

    this.onChange = this.onChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.confirmPasswords = this.confirmPasswords.bind(this);
    this.enablePreloader = this.enablePreloader.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
      signUpFailed: false,
    });
  }

  confirmPasswords(authFunction) {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({
        doPasswordsMatch: true,
      }, () => {
        console.log('lets get you signed up!');

        authFunction();
      });
    } else {
      this.setState({
        doPasswordsMatch: false,
      }, () => {
        console.log('sorry, your passwords do no match in signup');
      });
    }
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

  signUp(e) {
    e.preventDefault();

    this.enablePreloader();

    this.confirmPasswords(() => {
      const body = {
        username: this.state.username,
        fullName: this.state.fullName,
        password: this.state.confirmPassword,
        email: this.state.email,
      };

      axios.post(`${backend}/api/signup`, body)
        .then((response) => {
          console.log('in first promise', response);

          return response.status;
        })
        .then((status) => {
          if (status === 200) {
          // also subscribe them to our DB
            this.props.history.push('/afterSignUp');
          } else {
            console.log('Account taken!');
          }
        })
        .catch((err) => {
          return console.log('catch', err);
        });
    });
  }

  render() {
    const { signUpInProgress } = this.state;

    return (
      <div className='registration'>
      <Helmet>
        <title>Sign-Up | RemoteReq</title>
        <meta
          name="description"
          content="Sign up with RemoteReq to match with organizations and jobs that fit your skillsets the best. Sign-up to find your next position today!"
        />
      </Helmet>

      <div className="left-side-signup">
        <h1>
          Work from home,
          <br/>
          or anywhere else.
        </h1>

        <p>
          Create a remote, job seeker profile to be matched with
          <br/>nonprofit and for-profit companies
          <br/>working on causes you care most about.
        </p>
      </div>

      <form>
        <div className={`form-preloader ${signUpInProgress ? 'show' : 'hide'}`}>
          <Preloader color="blue"/>

          <p>Let's get you signed up!</p>
        </div>

        <div>
          <h3>Create your account</h3>

          <input
            tpye='text'
            name='username'
            onChange={ this.onChange }
            placeholder='Username'
            required>
          </input>
          <input
            type='text'
            name='fullName'
            onChange={ this.onChange }
            placeholder='Your Name'
            required />
          <input
            type='email'
            name='email'
            onChange={ this.onChange }
            placeholder='Email'
            required />
          <input
            type='password'
            name='password'
            onChange={ this.onChange }
            placeholder='Create your password'
            required />
          <input
            className={
              `${this.state.doPasswordsMatch ? '' : 'input-error'}`
            }
            type='password'
            name='confirmPassword'
            onChange={ this.onChange }
            placeholder='Confirm your password'
            required />
            <p className={
              `error ${this.state.doPasswordsMatch ? 'hide' : 'show'}`
            }>
              Passwords do not match
            </p>
        </div>

        <p className="password-note">Password must be at least 8 characters *</p>

        <p className="smaller-paragraph">
            By continuing, you agree to our
            &nbsp;<Link to="/terms-of-use" className="smaller-link">Terms of Use</Link>&nbsp;
            and
            &nbsp;<Link to="/privacy-policy"className="smaller-link">Our Privacy Policy</Link>.
        </p>

        <button
          type='submit'
          className='button-1'
          onClick={ this.signUp }
          >Create Your Profile
        </button>

        <p className="small-paragraph">Already have an account? <Link className="small-link" to='/sign-in'>Sign In</Link></p>
      </form>
    </div>
    );
  }
}

export default SignUp;