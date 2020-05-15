import React from 'react';

const LPHeader = () => (
  <div className='landingPage-header'>
    {/* <div className="landingPage-overlay"></div> */}
    <div className='landingPage-heading-btns'>
      <div className='heading'>
        <h1>Find remote work with purpose.</h1>
        { window.innerWidth > 767? (
          <h3>We connect highly-skilled, remote professionals with nonprofit and for-profit companies working for the greater good. Find a part-time gig, or full-time, today.</h3>

        ) :
          <h3>We connect highly-skilled, remote professionals with companies working for the greater good.</h3>
        }
      </div>
      <button className='create-profile-btn'>create your profile</button>
      <h3 className='find-talent'><a href='#'>Find talent</a></h3>
    </div>
  </div>
);

export default LPHeader;