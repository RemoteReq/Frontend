import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import RedLine from '#assets/images/svgs/red-line.svg';
import PinkLine from '#assets/images/svgs/pink-line.svg';
import WebFooter from '../../components/parts/WebFooter.jsx';

const Mission = () => {
  return (
  <div>
    <div className="mission">

      <Helmet>
        <title>About Mission-Focused Job Matching | RemoteReq</title>
        <meta
          name="description"
          content="We’re built on a decade of executive recruiting experience and talent consulting in the nonprofit world and 15 years of collective experience working remotely. So we know what it takes to find a great fit."
        />
      </Helmet>

      <div className="mission-block">
        <div className="mission-graphics">
          <RedLine className="red-line"/>
          {/* <object type="image/svg+xml" data={RedLine}>Red Line</object> */}

          <div className="mission-statement">
            <div className="mission-statement-upper">
              <h1>
                About Us
              </h1>
            </div>

            <div className="mission-statement-lower">
              <p className="small-paragraph">
                RemoteReq is a group of passionate digital nomads driven by work that matters.
                We know what an incredible opportunity it is to work from home and change the world at the same time, and we believe more people should be able to have the same experience.
                We also know remote workers are enormous assets to the companies they serve, but historically, nonprofits and other mission-driven organizations have not had the same level of access as other industries to this kind of talent.
                We believe remote-first workers and mission-driven organizations should have more opportunities to connect and make a difference together.
              </p>

              <br/>

              <p className="small-paragraph">
                We’re built on a decade of executive recruiting experience and talent consulting in the nonprofit world and 15 years of collective experience working remotely. So we know what it takes to find a great fit.
              </p>

              <br/>

              {/* <p className="small-paragraph">
                RemoteReq allows job seekers to create a profile for free and instantly matches them with available positions, sending their resumés to the hiring organization. Organizations can post their remote positions, then visit their dashboard to view resumes of matched candidates and reach out to them directly.
                Through RemoteReq, you can use your skillset to change the world, no matter what part of it you live in.
              </p> */}
            </div>
          </div>

          {/* <object type="image/svg+xml" data={PinkLine}>Pink Line</object> */}
          <PinkLine className="pink-line"/>
        </div>
      </div>

    </div>

    <WebFooter
      header={'Put our network to work for your cause.'}
      graphics={false}
      component={
        <Link to="/employer">
        <button className="button-1">Post a job</button>
        </Link>
      }
      />
  </div>
  );
};

export default Mission;