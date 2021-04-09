import React from 'react';
import { Link } from 'react-router-dom';
import JobBadges from '#parts/JobBadge.jsx';
import MatchRating from '#parts/MatchRating.jsx';

// Model JobListing after Jen's mock up, with the circle and all that
// Has a circle that indicates match percentage.

const JobListing = ({ job }) => {
  const previewDetails = job.jobDetails.substring(0, 128);

  return (
  <div className="job-listing">
    <Link
      to={{
        pathname: `/job/${job._id}`,
        state: {
          job,
        },
      }}
    >
      <div>
        <div className="upper-job-listing">
          <h4>{job.title}</h4>
          <div className="match-rating">
            {/* <div className="percentage-circle"></div> */}
            <MatchRating percent={job.matchingPercentage}/>
            <div className="percentage-match">{job.matchingPercentage}% MATCH</div>
          </div>
        </div>

          <h5>{job.companyName}</h5>
          <p className="small-paragraph">
            {previewDetails}
          </p>
          <JobBadges availability={job.availability} jobType={job.jobType}/>
      </div>
    </Link>
  </div>
  );
};

export default JobListing;