import React from 'react';
import { Link } from 'react-router-dom';
import WebFooter from '../../components/parts/WebFooter.jsx';

const CallToAction = () => {
  return (
  <WebFooter
  header={'Where remote-first talent makes their impact'}
  graphics={true}
  component={
    <div>
      <Link to="/sign-up">
        <button className='button-1'>Find Jobs</button>
      </Link>

      <Link to="/find-talent">
        <button className='button-2'>Hire Talent</button>
      </Link>
    </div>
  }
  />
  );
};

export default CallToAction;