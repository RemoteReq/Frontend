import React, { Component } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

class ESignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='e-signup'>
      <div className="left-side-esignup">
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
          className='e-button'
          onClick={ this.signUp }
          >Create Your Profile
        </button>

        <p className="small-paragraph">Already have an account?
          <Link className="small-link" to={'/employer/signIn'}>Sign In</Link>
        </p>
      </form>
    </div>
    );
  }
}

export default ESignUp;