import React from 'react';
import { Link } from 'react-router-dom';
import JobListing from './JobListing.jsx';

const JobList = ({ jobReqs }) => {
  if (jobReqs) {
    if (jobReqs.length === 0) {
      return (
        <EReminder />
      );
    }
    return (
      <MappedReqs jobReqs={jobReqs} />
    );
  }
  return (
    <div>
      Retrieving Your Job Reqs . . .
    </div>
  );
};

const EReminder = () => {
  return (
    <div className='jobList'>

    <div className="job-list-header">
      <h3>Your Jobs</h3>

      <Link to="/employer/gigSelect">
        <button className="button-1 small-button">
          Submit A Job Req
        </button>
      </Link>

    </div>
      Get matches by submitting job reqs!
    </div>
  );
};

const MappedReqs = ({ jobReqs }) => {
  return (
    <div className='jobList'>

      <div className="job-list-header">
        <h3>Your Jobs</h3>

        <Link to="/employer/gigSelect">
          <button className="button-1 small-button">
            Submit A Job Req
          </button>
        </Link>
      </div>

      <div className="jobs">
      {
        jobReqs.map((jobReq, index) => {
          return (
            <JobListing job={jobReq} key={index} />
          );
        })
      }
      </div>

    </div>
  );
};

export default JobList;