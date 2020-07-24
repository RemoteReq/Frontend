import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const backend = 'http://3.21.186.204:3030';

class SignUp extends Component {
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
      .then((response) => { return console.log(response); })
      .catch((err) => { return console.log(err); });
  }

  render() {
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
          <h3>Create your profile</h3>

          <input
            tpye='text'
            name='username'
            onChange={ this.onChange }
            placeholder='Username'
            required>
          </input>
          <input
            type='text'
            name='firstName'
            onChange={ this.onChange }
            placeholder='First Name'
            required />
          <input
            type='text'
            name='lastName'
            onChange={ this.onChange }
            placeholder='Last Name'
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
            type='password'
            name='regPassTwo'
            onChange={ this.onChange }
            placeholder='Confirm your password'
            required />
        </div>

        <p className="password-note">Password must be at least 8 characters *</p>

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