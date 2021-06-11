import React from 'react';
import { Link } from 'react-router-dom';
import Video from './Video/Video.jsx';
import LandingPageGraphic from '#assets/images/pngs/landing-page-graphic-2.png';

const LPHeader = () => {
  return (
  <div className='landingPage-header'>

    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Connecting nonprofits to purpose-driven talent</h1>
        <p>Connect to quality talent, at a nonprofit discount. Post a job to hire for remote, flexible, and on-site jobs. Join our network today.</p>
      </div>

      <div className="join-us">
          <Link to="/find-talent">
            <button className="big-button button-1">Hire Talent</button>
          </Link>

          <p>or</p>

          <Link to="/sign-up">
            <button className="big-button button-1">Find Jobs</button>
          </Link>
      </div>

      <Video />

    </div>

    <div>
      <img
        src={LandingPageGraphic}
        draggable="false"
        />
    </div>

  </div>
  );
};

export default LPHeader;