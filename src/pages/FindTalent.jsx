import React from 'react';
import triplet1 from '#assets/img/Profile.png';
import triplet2 from '#assets/img/Connect.png';
import triplet3 from '#assets/img/Forward.png';
import heroes from '#assets/images/pngs/find-talent-heroes.png';
import WebFooterLeft from '#assets/images/svgs/RR-web-footer-left.svg';
import WebFooterRight from '#assets/images/svgs/RR-web-footer-right.svg';

const FindTalent = () => (
  <div className="find-talent-page">
    <div className="find-talent-upper">
      <div className="find-talent-upper-left">
        <h1>Make a greater impact with remote talent.</h1>

        <p>
          Our network of remote professional are ready to help you do more good. Let us do the work for you.
          We will find, vet, and connect you with the remote talent you need. 
          Submit a job req to get started. Pay only for the candidates you choose to engage.
        </p>

        <button className="button-1">Submit a Job Req</button>
      </div>

      <div className="find-talent-upper-graphics">
        <img src={heroes}/>
      </div>
    </div>

    <div className="find-talent-mid">
      <div className="mid-triplet">
        <img className="triplet-icon" src={triplet1}></img>

        <h3>Submit a Job Req</h3>
        <p>Share your scope of work and the profile of your ideal hire.</p>
      </div>

      <div className="mid-triplet">
          <img className="triplet-icon" src={triplet2}></img>

          <h3>Get Matched</h3>
          <p>Our recruiting algorithm will review thousands of remote professioanls to find your "best fit" matches.</p>
      </div>

      <div className="mid-triplet">
        <img className="triplet-icon" src={triplet3}></img>

          <h3>Interview and hire</h3>
          <p>Review your "best fit" matches to find your remote unicorn.</p>
      </div>
    </div>

    <div className="find-talent-pricing">
      <h1>Simple, transparent pricing</h1>
      <p></p>

      <div className="card-container">
        <div className="pricing-card">
          <p className="pricing-card-title">Gigs</p>
          <h1 className="pricing-card-price">$1,000</h1>

          <div className="divider"></div>

          <div className="pricing-card-description">
            <p>For projects lasting 11 months or less</p>
            <p>3 "best fit" candidates</p>
            <p>Added capcity, skills, and expertise</p>
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
            <p>Added capacity, skills, and expertise</p>
            <p>Negotioable pay</p>
          </div>

          <button className="button-1">Submit a Job Req</button>
        </div>
      </div>
    </div>

    <div className="find-talent-lower">
      <div className="find-talent-lower-graphics">
        <WebFooterLeft className="web-footer-left" width={500}/>

        <div className="footer-contents">
          <h1>Build your remote team.</h1>
          <button className="button-1">Submit a Job Req</button>
        </div>

        <WebFooterRight className="web-footer-right" width={500}/>
      </div>
    </div>

  </div>
);

export default FindTalent;