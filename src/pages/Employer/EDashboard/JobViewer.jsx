import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ENav from '../ENav/ENav.jsx';

const backend = 'http://3.21.186.204:3030';

class JobViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
    console.log('job details', job);
    console.log('you matches btw', matches);

    return (
      <div className="job-viewer">
        <ENav/>

        <form>
          <div className="title-and-edit">
            <h3>{job.title}</h3>

            <Link to="">Edit</Link>
          </div>
          <p>Company: {job.companyName}</p>
          <p>Salary: ${job.salary}</p>
          <p>Job Type: {job.jobType}</p>
          <p>Hourly Wage: ${job.hourlyWage}/hr</p>
          <p>Industry: {job.industryType}</p>
          <p>Location: {job.location}</p>

          <br/>
          <br/>

          <p>Cause: {job.cause}</p>

          <p>Description:</p>
          <p>{job.jobDetails}</p>

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

          <p>Matches:</p>
          <ul className="job-viewer-matches">
            {
              matches
                ? matches.map((candidate, key) => {
                  // const initial = candidate.fullName[0];
                  return (

                  <li className="hidden-match" key={key}>
                    {`${candidate.fullName} ${candidate.matchingPercentage}%`}
                  </li>
                  );
                })

                : <li>You matches will appear here</li>
            }
          </ul>
        </form>
      </div>
    );
  }
}

export default JobViewer;