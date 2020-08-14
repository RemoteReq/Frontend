import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const backend = 'http://3.21.186.204:3030';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmailValid: true,
      doPasswordsMatch: true,
    };

    this.onChange = this.onChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.confirmPasswords = this.confirmPasswords.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  confirmPasswords() {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({
        doPasswordsMatch: true,
      });
    } else {
      this.setState({
        doPasswordsMatch: false,
      });
    }
  }

  signUp(e) {
    e.preventDefault();
    this.confirmPasswords();

    if (this.state.doPasswordsMatch) {
      const body = {
        username: this.state.username,
        fullName: this.state.fullName,
        password: this.state.password,
        email: this.state.email,
      };

      axios.post(`${backend}/api/signup`, body)
        .then((response) => {
          console.log(response);

          return response.status;
        })
        .then((status) => {
          if (status === 200) {
            // also subscribe them to our DB
            this.props.history.push('/signin');
          } else {
            console.log('Account taken!');
          }
        })
        .catch((err) => { return console.log(err); });
    } else {
      console.log('passwords do not match');
    }
  }

  render() {
    document.title = 'Sign Up with RemoteReq';

    return (
      <div className='registration'>
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
              `${this.state.doPasswordsMatch ? 'error hide' : 'error'}`
            }>
              Passwords do not match
            </p>
        </div>

        <p className="password-note">Password must be at least 8 characters *</p>

        <p className="smaller-paragraph">
            By continuing, you agree to our
            &nbsp;<Link to="/termsOfUse" className="smaller-link">Terms of Use</Link>&nbsp;
            and
            &nbsp;<Link to="/privacyPolicy"className="smaller-link">Our Privacy Policy</Link>.
        </p>

        <button
          type='submit'
          className='button-1'
          onClick={ this.signUp }
          >Create Your Profile
        </button>

        <p className="small-paragraph">Already have an account? <Link className="small-link" to='/signin'>Sign In</Link></p>
      </form>
    </div>
    );
  }
}

export default SignUp;