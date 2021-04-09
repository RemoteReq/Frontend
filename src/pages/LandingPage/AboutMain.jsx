import React from 'react';
import { Link } from 'react-router-dom';
import RnPModule from './RnPModule.jsx';
import quickHiring from '#assets/images/pngs/quick-hiring.png';
import Matches from '#assets/images/pngs/matches.png';

const AboutMain = () => {
  return (
  <div className='about-main'>
    <h3 className='eyebrow'>What makes us different?</h3>

    <section>
      <div className="section-desc">
        <h1>Hire smarter &amp; faster</h1>
        <p>Whether you’re looking for a job or looking for a candidate, we do all the hard work for you, using our finely-tuned algorithm to instantly match highly skilled candidates to positions relevant to issues they care most about.</p>
        <Link to={'/sign-up'} className="large-link">Get Started</Link>
      </div>

      <div className="section-graphic">
        <img src={Matches}/>

        {/* <Matches className="svg-matches" height={'100%'} width={'100%'}/> */}
      </div>
    </section>


    <section className="middle-section">
      <h1>Remote-first + Purposeful</h1>
      <p>Finally, a central location for remote-first job seekers to find meaningful work at organizations making a difference.</p>
      <p>Create a free profile to use your talents to make an impact.</p>

      <RnPModule />
    </section>


    <section className="reverse-section">
      <div className="section-desc">
        <h1>The best talent anywhere</h1>
        <p>Through RemoteReq, remote-first workers can use their skills and passions to change the world from any corner of it, whether that’s a kitchen table in Texas or a flat in London.</p>
        <Link to="/sign-up" className="large-link">Find your job</Link>
      </div>

      <div className="section-graphic">
        <img src={quickHiring}/>
      </div>
    </section>
  </div>
  );
};

export default AboutMain;