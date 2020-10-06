import React from 'react';
import { Link } from 'react-router-dom';
import MatchRating from '#parts/MatchRating.jsx';

// Model JobListing after Jen's mock up, with the circle and all that
// Has a circle that indicates match percentage.

const JobListing = ({ job }) => {
  return (
  <div className="job-listing">

    <div>
      <div className="upper-job-listing">
        <h4 className="job-listing-title">{job.title}</h4>
        <div className="match-rating">
          {/* <div className="percentage-circle"></div> */}
          <MatchRating percent={job.matchingPercentage}/>
          <div className="percentage-match">{job.matchingPercentage}% MATCH</div>
        </div>
      </div>

      <h5>{job.companyName}</h5>

  <div className="lower-job-listing">
      <Link
        className="see-job"
        to={{
          pathname: `/job/${job._id}`,
          state: {
            job,
          },
        }}
      >
        See Job
      </Link>
    </div>
  </div>

  </div>
  );
};

export default JobListing;