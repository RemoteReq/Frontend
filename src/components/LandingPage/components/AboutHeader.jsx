import React from 'react';

import Connect from '../../../../assets/img/Connect.png';
import Forward from '../../../../assets/img/Forward.png';
import Profile from '../../../../assets/img/Profile.png';

const AboutHeader = () => (
  <div className='about-header'>
    <div className='box create-profile'>
      <img src={ Profile } alt='profile icon'/>
      <h3>Create a profile</h3>
      <p>Select the causes you care about. Tell us about your work experience, skills, and expertise.</p>
    </div>
    <div className='box get-matched'>
      <img src={ Connect } alt='connect icon'/>
      <h3>We match you</h3>
      <p>Our algorithm matches you with remote gigs. Think of us like your personal recruiter.</p>
    </div>
    <div className='box pay-forward'>
      <img src={ Forward } alt='forward icon'/>
      <h3>Pay it forward</h3>
      <p>Interview, get hired, and start making your impact.</p>
    </div>
  </div>
);

export default AboutHeader;