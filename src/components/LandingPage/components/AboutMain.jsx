import React from 'react';
import { Link } from 'react-router-dom';

const AboutMain = () => (
  <div className='about-main'>
    <div className='about remote-purposeful'>
      <h3 className='eyebrow'>What makes us different?</h3>
      <h1>Remote + Purposeful</h1>
<<<<<<< HEAD
      <h3>Great work can happen from anywhere. Find meaningful gigs and jobs, that are embracing greater flexibility. Don't just work, do someting greater.</h3>
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
      <a href='#'>Create your profile</a>
=======
      <p>Great work can happen from anywhere. Find meaningful gigs and jobs, that are embracing greater flexibility. Don't just work, do someting greater.</p>
      <Link to='/signup' className="large-link">Create your profile</Link>
>>>>>>> reorg
      <div className="img-placeholder"></div>
    </div>

    <div className='about your-personal-recruiter'>
      <h1>Meet your personal recruiter</h1>
<<<<<<< HEAD
      <h3>No more watching from the sidelines. Do impactful work from anywhere.</h3>
      <a href='#'>Get started</a>
=======
      <p>No more hours spent scouring jobs boards. No more lengthy and arduous job applications. Simply create a profile, and watch the opportunities populate in your dashboard.</p>
      <Link to='/signup' className="large-link">Get started</Link>
>>>>>>> reorg
      <div className="img-placeholder"></div>
    </div>

    <div className='about quick-hiring'>
      <h1>Quick hiring process</h1>
<<<<<<< HEAD
      <h3>Everyone wins with quicker response times and faster hiring processes.</h3>
      <a href='#'>Find a job</a>
=======
      <p>Our employer partners are incentivized to move quickly. Everyone wins with quicker responses times and faster hiring processes.</p>
      <Link to='/signup' className="large-link">Find a job</Link>
>>>>>>> reorg
      <div className="img-placeholder"></div>
    </div>
  </div>
);

export default AboutMain;