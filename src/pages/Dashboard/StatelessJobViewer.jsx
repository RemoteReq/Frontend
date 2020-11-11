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
            <div className="title-cluster">
              <div className="logo-box">
                <img src={job.companyLogoPath ? job.companyLogoPath : ''}/>
              </div>

              <div className="title-and-company">
                <h3>{job.title}</h3>
                <h4>{job.companyName}</h4>

                {
                  job.companyWebsiteUrl
                    ? <p className="small-paragraph">Company Website: <a href={`http://${job.companyWebsiteUrl}`}>{job.companyWebsiteUrl}</a></p>

                    : <p></p>
                }
              </div>
            </div>
          </div>

          <br/>
          <br/>

          <div className="job-headline">

            <div>
              <label>Job</label>
              <li>{job.jobType}</li>
              <li>
                {
                  job.jobType === 'Part Time' ? `$${job.hourlyWage} / Hour` : `$${job.salary} / Year`
                }
              </li>
            </div>

            <div>
              <label>Causes</label>
              <li>{job.cause}</li>
            </div>

            <div>
              <label>Location</label>
            <li>{job.location}</li>
            <li>Time Zone: GMT ({job.timeZone})</li>
            </div>

          </div>

          <br/>
          <br/>

          <p>Description:</p>
          <p className="small-paragraph" style={{ lineHeight: '14pt' }}>{job.jobDetails}</p>

          <br/>
          <br/>

          {
            job.jobDescriptionPath
              ? <div>

              <p>Download Job Description: </p>
                <a href={`${job.jobDescriptionPath}`}>Link</a>
              <br/>
              <br/>
            </div>

              : <p></p>
          }

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