import React from 'react';
import RedLine from '#assets/images/svgs/red-line.svg';
import PinkLine from '#assets/images/svgs/pink-line.svg';
import WebFooter from '../../components/parts/WebFooter.jsx';

const Mission = () => {
  document.title = 'RemoteReq | Our Mission';

  return (
  <div>
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

    </div>

    <WebFooter
      header={'Put our network to work for your cause.'}
      graphics={false}
      component={
        <button className="button-1">
          Submit a Job Req
        </button>
      }
      />
  </div>
  );
};

export default Mission;