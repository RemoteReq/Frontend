import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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

      <div className="job-list-header">
        <h3>Job Matches</h3>

        <Link to="/QnAv2">
          <button className="button-1 small-button">
            Retake QnA
          </button>
        </Link>
      </div>

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

        {/* <div className="await-jobs-icon">
          <img />
        </div> */}

        <h4>
          Thank you for completing your questionnaire.
        </h4>

        <p className="small-paragraph">
          We're working hard to find you a job match. Stay tuned.
        </p>

        <br/>

        <p className="small-paragraph">
          For more information, visit the Job Seeker Section of our <HashLink to="/faq#job-seeker-faq">Frequently Asked Questions</HashLink>
        </p>

        <br/>

        <Link to="/QnA/1">
          <button className="button-1 small-button">Retake Questionnaire</button>
        </Link>
      </div>
    </div>
  );
};

export default JobList;