import React from 'react';
import IconAndTitle from '#parts/IconAndTitle.jsx';
import TitleAndDivider from '#parts/TitleAndDivider.jsx';
import SuitcaseIcon from '#assets/icons/pngs/flaticon/profile-card-icons/suitcase.png';
import RibbonIcon from '#assets/icons/pngs/flaticon/profile-card-icons/ribbon.png';
import LocationIcon from '#assets/icons/pngs/flaticon/profile-card-icons/location.png';
import Navigation from '#parts/Navigation2.jsx';

const StatelessJobViewer = (props) => {
  const { job } = props.location.state || {};
  console.log('Job Seeker Stateless Job Viewer says:', job);

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

          <TitleAndDivider title={`About ${job.companyName}`}/>
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

          <TitleAndDivider title="Job Description"/>
          <p className="small-paragraph">{job.jobDetails}</p>

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

          <TitleAndDivider title="Skills required for this job"/>
          <br/>
          <div className="select-list">
            <div className="item-list">
              {
                typeof job.keySkills[0] === 'string'
                  ? JSON.parse(job.keySkills[0]).map((skill, i) => {
                    return (
                      <button
                        key={i}
                        disabled
                        className="list-item"
                      >
                        {skill}
                      </button>
                    );
                  })

                  : ''
              }
            </div>
          </div>

        </form>
      </div>
  );
};

export default StatelessJobViewer;