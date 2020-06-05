import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <div className='call-to-action'>
    <h1>Don't just work, do something greater.</h1>
    <div className='call-to-action-btns'>
        <button className='cta-find-jobs'><Link to="/signup">Find Jobs</Link></button>
        <button className='cta-find-talent'><Link to="/findTalent">Find Talent</Link></button>
    </div>
  </div>
);

export default CallToAction;