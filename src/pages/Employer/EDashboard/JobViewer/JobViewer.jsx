import React, { Component } from 'react';
import axios from 'axios';
import ENav from '../../ENav/ENav.jsx';
import EMatchRating from '#parts/EMatchRating.jsx';

const backend = 'http://3.21.186.204:3030';

class JobViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondPaymentStatus: true,
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
          });
        }
      });
  }

  render() {
    const { job } = this.props.location.state;
    const { matches } = this.state;
    const { secondPaymentStatus } = this.state;
    console.log('job details', job);
    console.log('you matches btw', matches);

    return (
      <div className="job-viewer">
        <ENav/>

        <form>
          <div className="title-and-edit">
            <h3>{job.title}</h3>
          </div>

          <p>Matches:</p>
          <div className="job-viewer-match-list">
            {
              matches
                ? matches.map((candidate, key) => {
                  return (
                    <EMatchRating percent={candidate.matchingPercentage} candidate={candidate} key={key}/>
                  );
                })

                : <li>You matches will appear here</li>
            }
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


          <br/>
          <br/>


        </form>
      </div>
    );
  }
}

export default JobViewer;