import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageGraphic from '#assets/images/pngs/landing-page-graphic-2.png';

const LPHeader = () => {
  return (
  <div className='landingPage-header'>

    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Find remote work with greater purpose.</h1>
        { window.innerWidth > 767
          ? <p>RemoteReq connects highly skilled remote job seekers with mission-focused organizations.</p>
          : <p>We connect highly-skilled, remote professionals with companies working for the greater good.</p>
        }
      </div>

      <div className="button-and-link">
        <div>
          <Link to="/sign-up">
            <button className='button-1'>Create your Profile</button>
          </Link>
        </div>

        <div>
          <Link to="/find-talent"
                className="large-link"
                >Find Talent
          </Link>
        </div>
      </div>
    </div>

    <img
      src={LandingPageGraphic}
      draggable="false"
    />

  </div>
  );
};

export default LPHeader;