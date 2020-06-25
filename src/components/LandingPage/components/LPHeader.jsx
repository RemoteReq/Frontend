import React from 'react';
import { Link } from 'react-router-dom';

const LPHeader = () => (
  <div className='landingPage-header'>
    {/* <div className="landingPage-overlay"></div> */}
    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Find remote work with purpose.</h1>
        { window.innerWidth > 767 ? (
          <p>We connect highly-skilled, remote professionals with nonprofit and for-profit companies working for the greater good. Find a part-time gig, or full-time, today.</p>

        )
          : <p>We connect highly-skilled, remote professionals with companies working for the greater good.</p>
        }
      </div>
      <button className='button-1'><Link to="/signup">Create your Profile</Link></button>
      <Link to="/findTalent" className="large-link">Find Talent</Link>
    </div>
  </div>
);

export default LPHeader;