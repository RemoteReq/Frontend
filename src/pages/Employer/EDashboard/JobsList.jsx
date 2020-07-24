import React from 'react';

const JobsList = (props) => (
  <div className='jobs-list'>
    {props.jobListing.map((data) => <div className="job-posting">
        <div className="jobs-company-job-title">
          <h2>{data.company}</h2>
          <h3>{data.jobTitle}</h3>
        </div>
        <div className="jobs-post-date-description">
          <h3>January 1, 1999</h3>
          <p>{data.jobDescription}</p>
        </div>
        <div className="jobs-skills">
          <h3>Required Skills</h3>
          <ul>
            {data.skills.map((skill) => <li>{skill}</li>)}
          </ul>
        </div>
        <button className='jobs-apply-btn'>Apply</button>
        <button className='jobs-report-btn'>Report Post</button>
      </div>)}
  </div>
);

export default JobsList;