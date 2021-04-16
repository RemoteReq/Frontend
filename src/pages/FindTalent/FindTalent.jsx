import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Xarrow from 'react-xarrows';
import triplet1 from '#assets/icons/pngs/Profile.png';
import triplet2 from '#assets/icons/pngs/Matched.png';
import triplet3 from '#assets/icons/pngs/Forward.png';
import WebFooter from '#parts/WebFooter.jsx';
import heroes from '#assets/images/pngs/find-talent-heroes.png';
import Pricing from './PricingTables/Pricing.jsx';
// import WebFooterLeft from '#assets/images/svgs/RR-web-footer-left.svg';
// import WebFooterRight from '#assets/images/svgs/RR-web-footer-right.svg';

const FindTalent = () => {
  return (
  <div className="find-talent-page">
    <Helmet>
      <title>Find Talent | RemoteReq</title>
      <meta
        name="description"
        content="Find the best prospects for your oganization. Using RemoteReq, we can match you with the best remote talent that fit the needs of your nonprofit. "
      />
    </Helmet>

    <div className="find-talent-upper">
      <div className="find-talent-upper-left">
        <h1>Make a greater impact with remote-first talent.</h1>

        <p>
          Our network of remote-first professionals are ready to help you do more good. Let us do the work for you.
          We will find, vet, and connect you with the remote talent you need.
          Submit a job req to get started. Pay only for the candidates you choose to engage.
        </p>

        <Link to="/employer">
          <button className="button-1">Submit a Job Req</button>
        </Link>

        <br />
        <br />

        <div>
          <Link to="/request-a-demo" className="large-link">
            Request a Demo
          </Link>
        </div>
      </div>

      <div className="find-talent-upper-graphics">
        <img src={heroes}/>
      </div>
    </div>

    <div className="find-talent-mid">
      <div className="mid-triplet">
        <img className="triplet-icon" src={triplet1}></img>

        <h3>Create an employer profile</h3>
        <p>Tells us about your organization and the difference you are making.</p>
      </div>

      <div className="mid-triplet">
          <img className="triplet-icon" src={triplet2}></img>

          <h3>Get matched to remote-first talent</h3>
          <p>Our recruiting algorithm will review thousands of remote-first professionals to find your "best fit" matches.</p>
      </div>

      <div className="mid-triplet">
        <img className="triplet-icon" src={triplet3}></img>

          <h3>Grow your impact</h3>
          <p>Interview who excites you. Hire a passionate new team member. Do more good.</p>
      </div>
    </div>

    <div name="pricing" id="pricing"></div>

    <div className="price-header-main">
      <h2>Hire for full-time or part-time openings</h2>
    </div>

    <Pricing />

    <Xarrow
      start="price-tail"
      startAnchor="bottom"
      end="price-head"
      endAnchor="right"
      strokeWidth={12}
      dashness={{ animation: 1 }}
      headSize={3}
      curveness={1}
      lineColor="#1d39eb"
      headColor="#1d39eb"
    />

    <WebFooter
    header={'Build your remote-first team.'}
    graphics={true}
    component={
      <div>
      <Link to="/employer">
        <button className="button-1">Submit a Job Req</button>
      </Link>

      {/* <Link to="howItWorks">
        <button className="button-2">How it works</button>
      </Link> */}
    </div>
    }
    />

  </div>
  );
};

export default FindTalent;