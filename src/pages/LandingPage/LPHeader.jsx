import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageGraphic from '#assets/images/pngs/landing-page-graphic.png';

const LPHeader = () => (
  <div className='landingPage-header'>

    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Find remote work with greater purpose.</h1>
        { window.innerWidth > 767
          ? <p>We connect highly-skilled, remote professionals with nonprofit and for-profit companies working for the greater good. Find a part-time gig, or full-time, today.</p>
          : <p>We connect highly-skilled, remote professionals with companies working for the greater good.</p>
        }
      </div>

      <div className="button-and-link">
        <div>
          <Link to="/signup">
            <button className='button-1'>Create your Profile</button>
          </Link>
        </div>

        <div>
          <Link to="/findTalent"
                className="large-link"
                >Find Talent
          </Link>
        </div>
      </div>
    </div>

    <img src={LandingPageGraphic}/>

  </div>
);

export default LPHeader;