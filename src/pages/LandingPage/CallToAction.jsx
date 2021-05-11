import React from 'react';
import { Link } from 'react-router-dom';
import WebFooter from '../../components/parts/WebFooter.jsx';

const CallToAction = () => {
  return (
  <WebFooter
  header={'Where remote-first talent makes their impact'}
  graphics={true}
  component={
    <div className="call-to-action">
      <Link to="/sign-up">
        <button className='big-button button-1'>Find Jobs</button>
      </Link>
      <p>or</p>
      <Link to="/find-talent">
        <button className='big-button button-1'>Hire Talent</button>
      </Link>
    </div>
  }
  />
  );
};

export default CallToAction;