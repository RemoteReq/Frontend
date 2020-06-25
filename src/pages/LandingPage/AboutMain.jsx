import React from 'react';
import { Link } from 'react-router-dom';

const AboutMain = () => (
  <div className='about-main'>
    <div className='about remote-purposeful'>
      <h3 className='eyebrow'>What makes us different?</h3>
      <h1>Remote + Purposeful</h1>
      <p>No more watching from the sidelines. Do impactful work from anywhere.</p>
      <ul>
        <li>Health &amp; Wellness</li>
        <li>LGBTQIA+ Rights</li>
        <li>Climate Change</li>
        <li>Water &amp; Sanitation</li>
        <li>Racial Justice</li>
        <li>Voting Rights</li>
        <li>Educational Equity</li>
        <li>Women's Rights</li>
      </ul>
      <Link to='/signup' className="large-link">Create your profile</Link>
      <div className="img-placeholder"></div>
    </div>

    <div className='about your-personal-recruiter'>
      <h1>Meet your personal recruiter</h1>
      <p>No more lost hours scouring jobs boards. No more lengthy applications. Simply create a profile, and let us do the work for you.</p>
      <Link to='/signup' className="large-link">Get started</Link>
      <div className="img-placeholder"></div>
    </div>

    <div className='about quick-hiring'>
      <h1>Quick hiring process</h1>
      <p>Everyone wins with quicker response times and faster hiring processes.</p>
      <Link to='/signup' className="large-link">Find a job</Link>
      <div className="img-placeholder"></div>
    </div>
  </div>
);

export default AboutMain;