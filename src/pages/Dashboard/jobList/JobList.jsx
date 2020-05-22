import React from 'react';
import JobListing from './JobListing.jsx';

// From here, loop over the inherited data from App.jsx and render and JobListings

const JobList = ({ jobs }) => (
  <div className='jobList'>

    <h2>Job Matches</h2>
      {
        jobs.map((job, i) => (
          (
            <JobListing key={i} job={job}/>
          )
        ))
      }

      <div>{'< 1 2 3 >'}</div>

    </div>
);

export default JobList;