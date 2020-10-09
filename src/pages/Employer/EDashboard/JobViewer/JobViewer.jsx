import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ENav from '../../ENav/ENav.jsx';
import EMatchRating from '#parts/EMatchRating.jsx';
import MatchWindow from './MatchWindow.jsx';

const backend = 'http://3.21.186.204:3030';

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
        console.log('Retrieving candidate matches for job: ', response);

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
    const { secondPaymentStatus } = job;
    const { transactionId } = this.state;
    const expireDate = new Date(job.expireDate);

    console.log('job details', job);
    console.log('you matches btw', matches);
    console.log('firstPaymentStatus', firstPaymentStatus);
    console.log('job viewer state', this.state);

    return (
      <div className="job-viewer">
        <ENav/>

        <form>
          <div className="title-and-edit">
            <h3>{job.title}</h3>
            <p className="small-paragraph">{transactionId ? `Transaction ID:${transactionId}` : ''}</p>
          </div>
          <h4>{job.companyName}</h4>

          <br/>
          <br/>

          <MatchWindow firstPaymentStatus={firstPaymentStatus} matches={matches} job={job}/>

          <p className="small-paragraph">Matches expire on: {expireDate.toDateString()}</p>

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
              <label>Cause</label>
              <li>{job.cause}</li>
            </div>

            <div>
              <label>Location</label>
            <li>{job.location}</li>
            <li>Time Zone: GMT ({job.timeZone})</li>
            </div>

          </div>

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


          <br/>
          <br/>


        </form>
      </div>
    );
  }
}

export default JobViewer;