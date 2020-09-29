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
      });
  }

  render() {
    const { job } = this.props.location.state;
    console.log(job);

    return (
      <div className="job-viewer">
        <ENav/>

        <form>
          <div className="title-and-edit">
            <h3>{job.title}</h3>

            <Link to="">Edit</Link>
          </div>
          <p>Company: {job.companyName}</p>
          <p>Salary: {job.salary}</p>
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
          <div></div>
        </form>
      </div>
    );
  }
}

export default JobViewer;