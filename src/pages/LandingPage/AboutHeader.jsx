import React from 'react';
import Connect from '#assets/icons/pngs/Matched.png';
import Forward from '#assets/icons/pngs/Forward.png';
import Profile from '#assets/icons/pngs/Profile.png';

const AboutHeader = () => {
  return (
  <div className='about-header'>
    <div className='box create-profile'>
      <img src={ Profile } alt='profile icon'/>
      <h3>Create a profile</h3>
      <p>Tell us about you, what you do, and the causes most personal to you.</p>
    </div>

    <div className='box get-matched'>
      <img src={ Connect } alt='connect icon'/>
      <h3>Get Matched</h3>
      <p>Our recruiting algorithm finds your best fit remote-first matches. Think of us as your personal recruiter.</p>
    </div>

    <div className='box pay-forward'>
      <img src={ Forward } alt='forward icon'/>
      <h3>Pay it forward</h3>
      <p>Interview, get hired, and start making an impact.</p>
    </div>
  </div>
  );
};

export default AboutHeader;