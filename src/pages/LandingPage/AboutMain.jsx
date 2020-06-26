import React from 'react';
import { Link } from 'react-router-dom';
import RnPmodule from './RnPModule.jsx';
import quickHiring from '#assets/images/pngs/quick-hiring.png';
import Matches from '#assets/images/svgs/matches.svg';
import RnPModule from './RnPModule.jsx';

const AboutMain = () => (
  <div className='about-main'>
    <h3 className='eyebrow'>What makes us different?</h3>

    <section>
      <div className="section-desc">
        <h2>Meet your personal recruiter</h2>
        <p>No more lost hours scouring jobs boards. No more lengthy applications. Simply create a profile, and let us do the work for you.</p>
        <Link to={'/signup'} className="large-link">Get Started</Link>
      </div>

      <div className="section-graphic">
        <Matches className="svg-matches" height={'100%'} width={'100%'}/>
      </div>
    </section>


    <section className="middle-section">
      <h2>Remote + Purposeful</h2>
      <p>No more watching from the sidelines. Do impactful work from anywhere.</p>
      
      <RnPModule />
    </section>


    <section className="reverse-section">
      <div className="section-desc">
        <h2>Quick hiring process</h2>
        <p>Everyone wins with quicker response times and faster hiring processes.</p>
        <Link to="/signup" className="large-link">Find your job</Link>
      </div>

      <div className="section-graphic">
        <img src={quickHiring}/>
      </div>
    </section>
  </div>
);

export default AboutMain;