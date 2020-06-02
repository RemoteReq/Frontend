import React from 'react';
import RedLine from '../../../assets/svg/red-line.svg';

const Mission = () => (
  <div className="mission">

    <div className="mission-block">
      <div className="mission-graphics">
        <img src={RedLine} alt="red line"/>

        <img/>
      </div>

      <div className="mission-statement">
        <div className="mission-statement-upper">
          On behalf of remotes,
          <br/>
          created by remotes.
        </div>

        <div className="mission-statement-lower">
          <p>We are the creatives, and the builders,</p>
          <p>With the skills and expertise,</p>
          <p>The special-ops forces of mission-driven businesses,</p>
          <p>Strengthening the ranks of small business and nonprofits,</p>
          <p>A thousand strong, and growing,</p>
          <p>Commited, professional, and proven.</p>
        </div>
      </div>
    </div>

    <div className="mission-join-us">

      <h1>Put our network </h1>
      <h1>to work for your cause.</h1>

      <div className="join-us-container">
        <button className="button-1">
          Submit a Job Req
       </button>
      </div>

    </div>

  </div>
);

export default Mission;