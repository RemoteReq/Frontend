import React from 'react';
import JobListing from './JobListing.jsx';

// From here, loop over the inherited data from App.jsx and render and JobListings

const JobList = ({ jobs }) => {
  return (
    jobs
      ? <div className='jobList'>

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

      : <div>
      Retreiving Jobs . . .
    </div>
  );
};

export default JobList;