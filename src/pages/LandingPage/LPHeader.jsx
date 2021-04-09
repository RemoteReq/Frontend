import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageGraphic from '#assets/images/pngs/landing-page-graphic-2.png';

const LPHeader = () => {
  return (
  <div className='landingPage-header'>

    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Find remote-first work with greater purpose.</h1>
        { window.innerWidth > 767
          ? <p>RemoteReq connects high-quality job seekers with mission-focused organizations offering remote-first work. </p>
          : <p>RemoteReq connects high-quality job seekers with mission-focused organizations offering remote-first work. .</p>
        }
      </div>

      <div className="button-and-link">
        <Link to="/sign-up">
          <button className='button-1'>Create your Profile</button>
        </Link>

        <Link to="/find-talent"
              className="large-link"
              >Find Talent
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