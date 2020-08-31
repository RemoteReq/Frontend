import React from 'react';
import { Link } from 'react-router-dom';
import JobListing from './JobListing.jsx';

// From here, loop over the inherited data from App.jsx and render and JobListings

const JobList = ({ jobReqs }) => {
  return (
    jobReqs
      ? <div className='jobList'>

    <div className="job-list-header">
      <h3>Your Jobs</h3>

      <Link to="/employer/gigSelect">
        <button className="button-1 small-button">
          Buy Job Post
        </button>
      </Link>

    </div>

    <div>
      {
        jobReqs.map((jobReq, index) => {
          return (
            <JobListing job={jobReq} key={index} />
          );
        })
      }
    </div>

  </div>

      : <div>Getting job Reqs...</div>

  );
};

export default JobList;