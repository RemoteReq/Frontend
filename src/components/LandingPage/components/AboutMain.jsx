import React from 'react';
import { Link } from 'react-router-dom';

const AboutMain = () => (
  <div className='about-main'>
    <div className='about remote-purposeful'>
      <h3 className='eyebrow'>What makes us different?</h3>
      <h1>Remote + Purposeful</h1>
      <p>Great work can happen from anywhere. Find meaningful gigs and jobs, that are embracing greater flexibility. Don't just work, do someting greater.</p>
      <Link to='/signup' className="large-link">Create your profile</Link>
      <div className="img-placeholder"></div>
    </div>

    <div className='about your-personal-recruiter'>
      <h1>Meet your personal recruiter</h1>
      <p>No more hours spent scouring jobs boards. No more lengthy and arduous job applications. Simply create a profile, and watch the opportunities populate in your dashboard.</p>
      <Link to='/signup' className="large-link">Get started</Link>
      <div className="img-placeholder"></div>
    </div>

    <div className='about quick-hiring'>
      <h1>Quick hiring process</h1>
      <p>Our employer partners are incentivized to move quickly. Everyone wins with quicker responses times and faster hiring processes.</p>
      <Link to='/signup' className="large-link">Find a job</Link>
      <div className="img-placeholder"></div>
    </div>
  </div>
);

export default AboutMain;