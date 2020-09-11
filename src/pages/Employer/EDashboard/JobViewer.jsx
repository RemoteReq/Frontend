import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ENav from '../ENav/ENav.jsx';

class JobViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
          <p>Salary: {job.ctc}</p>
          <p>Industry: {job.industryType}</p>
          <p>Location: {job.location}</p>

          <br/>
          <br/>

          <p>Description:</p>
          <p>{job.jobDetails}</p>

          <br/>
          <br/>

          <p>Key Skills:</p>
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