import React from 'react';

// Model JobListing after Jen's mock up, with the circle and all that
// Has a circle that indicates match percentage.

const JobListing = ({ job }) => (
  <div className="job-listing">

    <div>
      <div className="upper-job-listing">
        <h3 className="job-listing-title">{job.jobTitle}</h3>
        <p>Hide Job X</p>
      </div>

      <h5>{job.company}</h5>

  <div className="lower-job-listing">
      <a className="see-job">See Job</a>
      <div className="match-rating">
        <div className="percentage-circle"></div>
        <div className="percentage-match">90% MATCH</div>
      </div>
    </div>
  </div>

  </div>
);

export default JobListing;