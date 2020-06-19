import React, { Component } from 'react';
import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onChange = this.onChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  }

  signUp(e) {
    e.preventDefault();

    const body = {
      username: this.state.username,
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
    };

    console.log('registration firing away!', body);

    axios.post(`${backend}/api/signup`, body)
      .then((response) => console.log(response))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='registration'>
      <div className="left-side-register">

        <div className="left-side-header">
          <h1>
            Join hundreds
            <br/>
            of elite
            <br/>
            professionals.
          </h1>
        </div>

        <div className="left-side-blurb">
          Create your professional profile so we can start
          <br/>finding you jobs. Blah bleep blah bop bope.
        </div>
      </div>

      <form>
        <div>
          <h2>Create your profile</h2>

          <input
            tpye='text'
            name='username'
            onChange={ this.onChange }
            placeholder='username'
            required>
          </input>
          <input
            type='text'
            name='firstName'
            onChange={ this.onChange }
            placeholder='first name'
            required />
          <input
            type='text'
            name='lastName'
            onChange={ this.onChange }
            placeholder='last name'
            required />
          <input
            type='email'
            name='email'
            onChange={ this.onChange }
            placeholder='email'
            required />
          <input
            type='password'
            name='password'
            onChange={ this.onChange }
            placeholder='create your password'
            required />
          <input
            type='password'
            name='regPassTwo'
            onChange={ this.onChange }
            placeholder='confirm your password'
            required />
        </div>

        <p className="password-note">Password must be at least 8 characters *</p>

        <button
          type='submit'
          className='registration-btn'
          onClick={ this.signUp }
          >CREATE YOUR PROFILE
        </button>

        <p className="redirect-to-signin">Already have an account? <a href='/signin'>Sign In</a></p>
      </form>
    </div>
    );
  }
}

export default Registration;