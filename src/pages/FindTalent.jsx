import React from 'react';
import triplet1 from '#assets/img/Profile.png';
import triplet2 from '#assets/img/Connect.png';
import triplet3 from '#assets/img/Forward.png';

const FindTalent = () => (
  <div className="find-talent-page">
    <div className="find-talent-upper">
      <div className="find-talent-upper-left">
        <h1>Make a greater impact with remote talent.</h1>

        <p>
          Our network of professionals are looking for meaningful assignment. Wel will review thousands of
          highly qualified remote candidates to find the best match for your team.
        </p>

        <button className="button-1">Submit a Job Req</button>
      </div>

      <div className="find-talent-upper-graphics">

      </div>
    </div>

    <div className="find-talent-mid">
      <div className="mid-triplet">
        <img className="triplet-icon" src={triplet1}></img>

        <h3>Submit a Job Req</h3>
        <p>Share your scope of work and profile of your ideal here.</p>
      </div>

      <div className="mid-triplet">
          <img className="triplet-icon" src={triplet2}></img>

          <h3>Get Matched</h3>
          <p>Our talent matching algorithm generates your list of finalists.</p>
      </div>

      <div className="mid-triplet">
        <img className="triplet-icon" src={triplet3}></img>

          <h3>Interview and hire</h3>
          <p>Interview, hire, and grow your team. Can this get any longer?</p>
      </div>
    </div>

    <div className="find-talent-pricing">
      <h1>Simple, transparent pricing</h1>
      <p>Explain the pricing here</p>

      <div className="card-container">
        <div className="pricing-card">
          <p className="pricing-card-title">Gigs</p>
          <h1 className="pricing-card-price">$1,000</h1>

          <div className="divider"></div>

          <div className="pricing-card-description">
            <p>For projects lasting 11 months or less</p>
            <p>3 Finalist candidates</p>
            <p>Temporary skills &amp; expertise</p>
            <p>Negotioable hourly rates</p>
          </div>

          <button className="button-1">Submit a Job Req</button>
        </div>

        <div className="pricing-card">
        <p className="pricing-card-title">Full-Time</p>
          <h1 className="pricing-card-price">$2,500</h1>

          <div className="divider"></div>

          <div className="pricing-card-description">
            <p>Grow your team with a remote hire</p>
            <p>3-5 Finalist Candidates</p>
            <p>Added capacity, skills, &amp; expertise</p>
          </div>

          <button className="button-1">Submit a Job Req</button>
        </div>
      </div>
    </div>

    <div className="find-talent-lower">
      <h1>Build your remote team.</h1>
      <button className="button-1">Submit a Job Req</button>
    </div>

  </div>
);

export default FindTalent;