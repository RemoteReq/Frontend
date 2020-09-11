import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import locations from './locations.json';
import EAuth from '../../EAuth/EAuth.jsx';
import ENav from '../../ENav/ENav.jsx';

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      companyName: '',
      industryType: '',
      role: '',
      jobDetails: '',
      keySkills: [''],
      ctc: '',
      minExperience: 0,
      maxExperience: 0,
      location: '',
      numberOfCandidates: 0,
      percentageMatch: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addJob = this.addJob.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { return console.log(this.state); });
  }

  addJob(e) {
    e.preventDefault();

    const addJobForm = new FormData();

    // addJobForm.append('companyLogo', 'jpeg.jpeg');
    // addJobForm.append('jobDescription', 'pdf.pdf');
    addJobForm.append('title', this.state.title);
    addJobForm.append('companyName', this.state.companyName);
    // addJobForm.append('companyWebsiteUrl', this.state.comapnyURL);
    addJobForm.append('industryType', this.state.industryType);
    addJobForm.append('jobDetails', this.state.jobDetails);
    addJobForm.append('keySkills', ['Have 2 legs', 'Have 2 arms']);
    addJobForm.append('ctc', this.state.ctc);
    addJobForm.append('minExperience', this.state.minExperience);
    addJobForm.append('maxExperience', this.state.maxExperience);
    addJobForm.append('location', this.state.location);
    addJobForm.append('numberOfCandidate', this.state.numberOfCandidates);
    addJobForm.append('percentageMatch', this.state.percentageMatch);
    addJobForm.append('transactionIdForAddJob', this.props.location.state.transactionId);

    // for (const value of addJobForm.values()) {
    //   console.log(value);
    // }

    Axios({
      url: `${EAuth.backend}/api/jobs/add`,
      method: 'post',
      headers: {
        token: localStorage.getItem('e-session'),
      },
      data: addJobForm,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { transactionId } = this.props.location.state;
    console.log(transactionId);

    return (
      <div className="add-job">
        <ENav />

        <form className="job-form">
          <h4>Add Job</h4>

        {/* <h4>Transaction ID: {transactionId}</h4> */}

          <div className="grid-1fr-1fr spaced">

            <div>
              <label>Job Title</label>
              <input
                placeholder="ex: Looking for UX Developer"
                name="title"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Company Name</label>
              <input
                placeholder="ex: Google"
                name="companyName"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Industry</label>
              <input
                placeholder="ex: Software"
                name="industryType"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Role</label>
              <input
                placeholder="UX Developer"
                name="role"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Job Details (0 / 255 characters)</label>
              <div className="textarea-div">
                <textarea
                  placeholder="ex: Google is looking for a new UX Developer to lead in creating a new UI for the newest version of Android"
                  className="aboutMe"
                  name="jobDetails"
                  onChange={(e) => { return this.handleChange(e); }}
                />
              </div>


              <label>Key Skills</label>
              <input
                placeholder="ex: Flutter, Dart, SASS, Go"
                name="keySkills"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <button
                className="button-2"
              >
                Upload Description
              </button>
            </div>

            <div>

              <label>Company Logo</label>
              <div className="image-box">
                <img />
              </div>
              <input
                type="file"
                className="button-1"
                />

              <label>Salary</label>
                <input
                type="number"
                name="ctc"
                onChange={(e) => { return this.handleChange(e); }}
                />

              <div className="range">
                <label>Minimum Years of Experience</label>
                <input
                  type="number"
                  name="minExperience"
                  onChange={(e) => { return this.handleChange(e); }}
                  />

                <label>Maximum Years of Experience</label>
                <input
                  type="number"
                  name="maxExperience"
                  onChange={(e) => { return this.handleChange(e); }}
                  />
              </div>

              <div className="select">
                <label>Location</label>
                <select name="location" onChange={(e) => { this.handleChange(e); }}>
                  {
                    locations.states.map((state, i) => {
                      return (
                        <option key={i} value={state}>
                          {state}
                        </option>
                      );
                    })
                  }
                </select>
              </div>


              <div className="notification-settings">
                <h3>Notification Settings</h3>
                <p className="small-paragraph">
                  We'll send you e-mail notifcations around these candidate-matching parameters.
                </p>

                <div className="sliders">
                  <label>Number of Candidates</label>
                  <div className="slider">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      name="numberOfCandidate"
                      defaultValue="1"
                      onChange={(e) => { return this.handleChange(e); }}
                      />
                    <input
                      value={this.state.numberOfCandidate}
                      readOnly
                      />
                  </div>

                  <label>Percentage Match</label>
                  <div className="slider">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="1"
                    name="percentageMatch"
                    defaultValue="20"
                    onChange={(e) => { return this.handleChange(e); }}
                    />
                  <input
                    value={`${this.state.percentageMatch} %`}
                    readOnly
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="form-handler">
            <Link to="/employer/firstPayment">
              <button
                className="button-1"
                onClick={(e) => { return this.addJob(e); }}
                >Save job Req</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default JobForm;