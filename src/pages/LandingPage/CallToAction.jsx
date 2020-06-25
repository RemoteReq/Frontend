import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <div className='call-to-action'>
    <h2>Don't just work, do <br/> something greater.</h2>

    <div className='call-to-action-buttons'>
        <Link to="/signup">
          <button className='button-1'>Find Jobs</button>
        </Link>

        <Link to="/findTalent">
          <button className='button-2'>Find Talent</button>
        </Link>
    </div>
  </div>
);

export default CallToAction;