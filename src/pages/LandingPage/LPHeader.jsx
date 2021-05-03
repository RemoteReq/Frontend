import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageGraphic from '#assets/images/pngs/landing-page-graphic-2.png';

const LPHeader = () => {
  return (
  <div className='landingPage-header'>

    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Helping you find the talent you need to further your mission.</h1>
        <p>Connect to quality talent, at a nonprofit discount. Post a job to hire for remote, flexible, and on-site jobs. Join our network today.</p>
      </div>

      <div className="join-us">
          <Link to="/sign-up">
            <button className="button-1">Job Seekers</button>
          </Link>

          <Link to="/find-talent">
            <button className="e-button">Employers</button>
          </Link>
      </div>
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