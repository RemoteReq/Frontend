import React from 'react';
import { Link } from 'react-router-dom';

const LPHeader = () => (
  <div className='landingPage-header'>
    {/* <div className="landingPage-overlay"></div> */}
    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Find remote work with greater purpose.</h1>
        { window.innerWidth > 767 ? (
          <h3>We connect highly-skilled, remote professionals with nonprofit and for-profit companies working for the greater good. Find a part-time gig, or full-time, today.</h3>

        )
          : <h3>We connect highly-skilled, remote professionals with companies working for the greater good.</h3>
        }
      </div>
      <button className='create-profile-btn'><Link to="/signup">Create your Profile</Link></button>
      <h3 className='find-talent'><Link to="/findTalent">Find Talent</Link></h3>
    </div>
  </div>
);

export default LPHeader;