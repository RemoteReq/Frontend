import React from 'react';
import NameEmailNumberPass from './regSubComponents/NameEmailNumberPass.jsx';

const Registration = props => (
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
      <NameEmailNumberPass userInput={props.userInput} />
      <p className="password-note">Password must be at least 8 characters *</p>
      <button 
        type='submit' 
        className='registration-btn'
        onClick={() => props.register()}>CREATE YOUR PROFILE
      </button>

      <p className="redirect-to-signin">Already have an account? <a href='/signin'>Sign In</a></p>
    </form>
  </div>
);

export default Registration;