import React from 'react';
import JobListing from './JobListing.jsx';

// From here, loop over the inherited data from App.jsx and render and JobListings

const JobList = ({ jobs }) => {
  console.log('jobs in jobsList', jobs);

  if (jobs) {
    if (jobs.length === 0) {
      return (
        <AwaitingJobs />
      );
    }
    return (
        <MappedJobs jobs={jobs}/>
    );
  }
  return (
    <div>
      Retrieving jobs . . .
    </div>
  );
};

const MappedJobs = ({ jobs }) => {
  return (
    <div className='jobList'>

    <h3>Job Matches</h3>

    <div className="jobs">
      {
        jobs.map((job, i) => {
          return (
            (
              <JobListing key={i} job={job}/>
            )
          );
        })
      }
      </div>
    </div>
  );
};

const AwaitingJobs = () => {
  return (
    <div className="jobList">
      <h3>Job Matches</h3>

      <div className="await-jobs">

        <div className="await-jobs-icon">
          <img />
        </div>

        <h4>
          We're working hard to match you with the best jobs!
        </h4>

        <p className="small-paragraph">
          Expect an email with your first matches, and then check back here for a list of jobs.
        </p>
      </div>
    </div>
  );
};

export default JobList;