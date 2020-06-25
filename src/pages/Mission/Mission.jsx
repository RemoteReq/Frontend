import React from 'react';
import RedLine from '#assets/images/svgs/red-line.svg';
import PinkLine from '#assets/images/svgs/pink-line.svg';

const Mission = () => (
  <div className="mission">

    <div className="mission-block">
      <div className="mission-graphics">
        <RedLine className="red-line"/>

        <div className="mission-statement">
          <div className="mission-statement-upper">
            <h2>
              On behalf of remotes,
              <br/>
              created by remotes.
            </h2>
          </div>

          <div className="mission-statement-lower">
            <p>
              We are the creatives, and the builders, <br/>
              With the skills and expertise, <br/>
              The special-ops forces of mission-driven businesses, <br/>
              Strengthening the ranks of small business and nonprofits, <br/>
              A thousand strong, and growing, <br/>
              Commited, professional, and proven.
            </p>
          </div>
        </div>

        <PinkLine className="pink-line"/>
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