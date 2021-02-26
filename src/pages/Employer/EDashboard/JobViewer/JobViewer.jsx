import React, { Component } from 'react';
import axios from 'axios';
import ENav from '../../ENav/ENav.jsx';
// import EMatchRating from '#parts/EMatchRating.jsx';
import MatchWindow from './MatchWindow.jsx';
import HireSelect from './HireSelect.jsx';
import IconAndTitle from '#parts/IconAndTitle.jsx';
import SuitcaseIcon from '#assets/icons/pngs/flaticon/profile-card-icons/suitcase.png';
import RibbonIcon from '#assets/icons/pngs/flaticon/profile-card-icons/ribbon.png';
import LocationIcon from '#assets/icons/pngs/flaticon/profile-card-icons/location.png';

const backend = process.env.BASE_URL;

class JobViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactionId: '',
    };
  }

  componentDidMount() {
    axios({
      url: `${backend}/api/employers/matchesCandidateByEachJob/${this.props.location.state.job._id}`,
      method: 'POST',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            matches: response.data,
            job: this.props.location.state.job,
            transactionId: this.props.location.state.job.transactionDetails.transactionIdForAddJob.transactionId,
          });
        }
      });
  }

  render() {
    const { job } = this.props.location.state;
    const { matches } = this.state;
    const { firstPaymentStatus } = job;
    const { hiringPaymentStatus } = job;
    const { transactionId } = this.state;
    const expireDate = new Date(job.expireDate);

    return (
      <div className="job-viewer">
        <ENav/>

        <div className="Job-Master-Tools">
          <h4>Master Tools</h4>

          <div className="button-group">
            <button className="button-1 small-button">Assign</button>
          </div>
        </div>

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


            <p className="small-paragraph">{transactionId ? `Transaction ID:${transactionId}` : ''}</p>
          </div>

          <br/>
          <br/>

          <MatchWindow firstPaymentStatus={firstPaymentStatus} matches={matches} job={job}/>

          <p className="small-paragraph">{firstPaymentStatus ? `Matches expire on: ${expireDate.toDateString()}` : ''}</p>

          <br/>
          <br/>


          <HireSelect
            firstPaymentStatus={firstPaymentStatus}
            secondPaymentStatus={hiringPaymentStatus}
            jobType={job.jobType}
            jobId={job._id}
          />

          <br/>
          <p>Our Mission:</p>
          <p style={{ fontSize: '14pt' }}>{job.ourMission || ''}</p>
          <br />

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

          <p>Description:</p>
          <br/>
          <p style={{ fontSize: '14pt', lineHeight: '14pt' }}>{job.jobDetails}</p>

          <br/>
          <br/>

          {
            job.jobDescriptionPath
              ? <div>

              <p>Download Job Description: </p>
              <a className="small-link" href={`${job.jobDescriptionPath}`}>Link</a>
              <br/>
              <br/>
            </div>

              : <p></p>
          }

          <p>Skills required for this job:</p>
          <br/>
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
  }
}

export default JobViewer;