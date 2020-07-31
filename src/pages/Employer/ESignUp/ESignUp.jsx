import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const backend = 'http://3.21.186.204:3030';

class ESignUp extends Component {
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
      fullName: this.state.fullName,
      password: this.state.password,
      email: this.state.email,
      companyName: this.state.companyName,
    };

    console.log('registration firing away!', body);

    axios.post(`${backend}/api/signup/employerSignUp`, body)
      .then((response) => {
        console.log(response);

        return response.status;
      })
      .then((status) => {
        if (status === 200) {
          this.props.history.push('/employer/signin');
        } else {
          console.log('Account taken!');
        }
      })
      .catch((err) => { return console.log(err); });
  }

  render() {
    return (
      <div className='e-signup'>
      <div className="left-side-esignup">
        <h1>
          Recruit from home,
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
            name='fullName'
            onChange={ this.onChange }
            placeholder='Name'
            required />
          <input
            type='text'
            name='companyName'
            onChange={ this.onChange }
            placeholder='Name of your company'
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

        <p className="smaller-paragraph">
          By continuing, you agree to our
          &nbsp;<Link to="#" className="smaller-link">Terms of Use</Link>&nbsp;
          and
          &nbsp;<Link to="#"className="smaller-link">Our Privacy Policy</Link>.
        </p>

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