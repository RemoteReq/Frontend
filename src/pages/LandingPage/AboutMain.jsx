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
        <p>Our impact-focused recruiting algorithm scores thousands of potential candidates to find your best fit candidate matches, instantly. We do the sourcing and sorting out for you, so you can jump ahead to interviewing great candidates.</p>
        <Link to="/sign-up" className="large-link">Find your Job</Link>
      </div>

      <div className="section-graphic">
        <img src={Matches}/>

        {/* <Matches className="svg-matches" height={'100%'} width={'100%'}/> */}
      </div>
    </section>


    <section className="middle-section">
      <h1>Mission-focused &amp; Flexible</h1>
      <p>Nonprofits and impact-focused businesses now have access to the best available remote, flexible, and in-person talent.</p>

      <RnPModule />
    </section>


    <section className="reverse-section">
      <div className="section-desc">
        <h1>The best talent anywhere</h1>
        <p>We offer you access to remote, flexible, and on-site talent. Choose the best fit for your team, while remaining laser focused on your double bottomline.</p>
        <Link to="/find-talent" className="large-link">Find Talent</Link>
      </div>

      <div className="section-graphic">
        <img src={quickHiring}/>
      </div>
    </section>
  </div>
  );
};

export default AboutMain;