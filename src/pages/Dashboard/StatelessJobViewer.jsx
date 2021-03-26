import React from 'react';
import IconAndTitle from '#parts/IconAndTitle.jsx';
import SuitcaseIcon from '#assets/icons/pngs/flaticon/profile-card-icons/suitcase.png';
import RibbonIcon from '#assets/icons/pngs/flaticon/profile-card-icons/ribbon.png';
import LocationIcon from '#assets/icons/pngs/flaticon/profile-card-icons/location.png';
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
                    ? <h4>Company Website: <a href={`http://${job.companyWebsiteUrl}`}>{job.companyWebsiteUrl}</a></h4>

                    : <p></p>
                }
              </div>
            </div>
          </div>

          <br/>
          <br/>

          <p>About {job.companyName}:</p>
          <p className="small-paragraph">{job.aboutUs}</p>

          <br/>
          <br/>

          <div className="job-headline">
            <div className="job-headline-column">
              <IconAndTitle title="Job" icon={SuitcaseIcon}/>
              <li>{job.jobType}</li>
              <li>
                {
                  job.jobType === 'Part Time' ? `$${job.hourlyWage} / Hour` : `$${job.salary} / Year`
                }
              </li>
            </div>

            <div className="job-headline-column">
              <IconAndTitle title="Cause" icon={RibbonIcon}/>
              <li>{job.cause}</li>
            </div>

            <div className="job-headline-column">
              <IconAndTitle title="Location" icon={LocationIcon}/>
            <li>{job.location}</li>
            <li>Time Zone: GMT ({job.timeZone})</li>
            </div>
          </div>

          <p>Job Description:</p>
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
              JSON.parse(job.keySkills).map((skill, i) => {
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