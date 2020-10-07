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
            <button className="button-1 small-button">Start Matching</button>
          </div>
          <h4>{job.companyName}</h4>

          <br/>
          <br/>

          <p>Candidates best suited for this job:</p>
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
            <li>Time Zone: GMT({job.timeZone})</li>
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