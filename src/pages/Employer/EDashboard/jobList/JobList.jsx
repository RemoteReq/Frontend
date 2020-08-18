import React from 'react';
import { Link } from 'react-router-dom';
import JobListing from './JobListing.jsx';

// From here, loop over the inherited data from App.jsx and render and JobListings

const JobList = ({ jobs }) => {
  return (

  <div className='jobList'>

    <div className="job-list-header">
      <h3>Your Jobs</h3>

      <Link to="/employer/addJob">
        <button className="small-button">
          +
        </button>
      </Link>

    </div>

    <div>
      <p>This is where my list of jobs would go after I post them.</p>
    </div>

  </div>

  );
};

export default JobList;