import React, { Component } from 'react';
import axios from 'axios';

const backend = process.env.BASE_URL;

const AssignForm = ({
  jobId, handleChange, assignJob, assignmentStatus,
}) => {
  return (
    <div>
      <label>Job ID:</label>
      <input
        name="jobId"
        readOnly
        defaultValue={jobId}
      />

      <label>Target Employer ID:</label>
      <input
        name="targetEmployerId"
        onChange={(e) => { return handleChange(e); }}
      />

      <div className="button-group">
        <button
          className="small-button button-1"
          onClick={(e) => { return assignJob(e); }}
        >Assign</button>
      </div>

        {
          assignmentStatus
            ? <p className="small-paragraph" style={{ color: 'Green' }}>
            Job assignment successful
          </p>
            : ''
        }
    </div>
  );
};

class JobMasterTools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignmentStatus: false,
    };

    this.assignJob = this.assignJob.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      jobId: this.props.jobId,
      privilegeStatus: this.props.privilegeStatus,
    }, () => { console.log(this.state); });
  }

  assignJob(e) {
    e.preventDefault();

    const data = {
      jobId: this.state.jobId,
      employerId: this.state.targetEmployerId,
    };

    axios({
      url: `${backend}/api/jobs/jobAssignToAnotherEmployer`,
      data,
      method: 'POST',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { console.log(this.state); });
  }

  render() {
    const { assignmentStatus } = this.state;

    return (
      <div className="Job-Master-Tools">
        <h4>Job Master Tool</h4>

        <AssignForm
          jobId={this.props.jobId}
          assignJob={this.assignJob}
          handleChange={this.handleChange}
          assignmentStatus={assignmentStatus}
        />
      </div>
    );
  }
}

export default JobMasterTools;