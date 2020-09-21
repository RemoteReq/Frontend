import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import EAuth from '../../EAuth/EAuth.jsx';
import PartTimeForm from './PartTimeForm.jsx';
import FullTimeFrom from './FullTimeForm.jsx';

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      companyName: '',
      industryType: '',
      role: '',
      jobDetails: '',
      keySkills: [],
      ctc: '',
      minExperience: 0,
      maxExperience: 0,
      location: '',
      numberOfCandidates: 0,
      percentageMatch: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addJob = this.addJob.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { return console.log(this.state); });
  }

  addToList(e) {
    // e.preventDefault();

    let arrayToJoin = this.state[e.target.name];

    if (!arrayToJoin.includes(e.target.value)) {
      arrayToJoin = arrayToJoin.concat(e.target.value);

      this.setState({
        [e.target.name]: arrayToJoin,
      }, () => {
        console.log(this.state);
      });
    }
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
    const jobData = this.state;
    console.log(transactionId);

    return (

      this.props.location.state.gigType === 'FULL TIME'
        ? <FullTimeFrom
        jobData={jobData}
        addToList={this.addToList}
        handleChange={this.handleChange}
        addJob={this.addJob}/>

        : <PartTimeForm
        jobData={jobData}
        addToList={this.addToList}
        handleChange={this.handleChange}
        addJob={this.addJob}/>
    );
  }
}

export default JobForm;