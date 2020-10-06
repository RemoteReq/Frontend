import React from 'react';
import Navigation from '#parts/Navigation2.jsx';

const StatelessJobViewer = (props) => {
  console.log('Job Seeker Stateless Job Viewer says:', props.location.state);
  const { job } = props.location.state;

  return (
    <div className="job-viewer">
      <Navigation />

        <form>
          <div className="title-and-edit">
            <h3>{job.title}</h3>
          </div>

          <br/>
          <br/>

          <p>Company: {job.companyName}</p>
          <p>Salary: ${job.salary}</p>
          <p>Job Type: {job.jobType}</p>
          <p>Hourly Wage: ${job.hourlyWage}/hr</p>
          <p>Industry: {job.industryType}</p>
          <p>Location: {job.location}</p>


          <p>Cause: {job.cause}</p>

          <p>Description:</p>
          <p className="small-paragraph" style={{ lineHeight: '14pt' }}>{job.jobDetails}</p>
          <p>Skills required for this job:</p>
          <ul>
            {
              job.keySkills.map((skill, i) => {
                return (
                  <li key={i}>{skill}</li>
                );
              })
            }
          </ul>

        </form>
      </div>
  );
};

export default StatelessJobViewer;