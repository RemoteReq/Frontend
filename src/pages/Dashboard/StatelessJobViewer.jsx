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
              </div>
            </div>
          </div>

          <br/>
          <br/>

          {
          }
          <p className="small-paragraph">Company Website: <a href={`http://${job.companyWebsiteURL}`}></a></p>

          {
          }
          {/* <button className="small-paragraph">Attached job Description: </button>
          <p>Attached Job Description: </p> */}
          <button className="button-2"><a href="cool"></a>Download Job Description (.pdf)</button>

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