import React, { Component } from 'react';
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
      cause: '-----',
      jobDetails: '',
      keySkills: [],
      availableWorkDays: [],
      salary: 0,
      minExperience: 0,
      maxExperience: 0,
      location: '',
      numberOfCandidates: 0,
      percentageMatch: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addJob = this.addJob.bind(this);
    this.addToList = this.addToList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const { jobType } = this.props.location.state;

    this.setState({
      jobType,
    }, () => { console.log(this.state); });
  }

  handleChange(e) {
    // e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { return console.log(this.state); });
  }

  handleSelect(e) {
    e.preventDefault();

    this.setState({
      [e.targe.name]: e.target.value
      ,
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

    const { jobType } = this.state;

    // addJobForm.append('companyLogo', 'jpeg.jpeg');
    // addJobForm.append('jobDescription', 'pdf.pdf');
    addJobForm.append('title', this.state.title);
    addJobForm.append('companyName', this.state.companyName);
    // addJobForm.append('companyWebsiteUrl', this.state.comapnyURL);
    addJobForm.append('industryType', this.state.industryType);
    addJobForm.append('cause', this.state.cause);
    addJobForm.append('jobDetails', this.state.jobDetails);
    addJobForm.append('keySkills', this.state.keySkills);
    addJobForm.append('requiredEducationLevel', this.state.requiredEducationLevel);
    // addJobForm.append('ctc', this.state.ctc);
    addJobForm.append('soonestJoinDate', this.state.soonestJoinDate);
    addJobForm.append('minExperience', this.state.minExperience);
    addJobForm.append('maxExperience', this.state.maxExperience);
    addJobForm.append('location', this.state.location);
    addJobForm.append('numberOfCandidate', this.state.numberOfCandidates);
    addJobForm.append('percentageMatch', this.state.percentageMatch);
    // addJobForm.append('transactionIdForAddJob', this.props.location.state.transactionId);
    addJobForm.append('transactionIdForAddJob', 'sample job for testing');
    addJobForm.append('eligibleToWorkInUS', this.state.eligibleToWorkInUS);
    addJobForm.append('fluentInEnglish', this.state.fluentInEnglish);
    addJobForm.append('soonestJoinDate', '2020-9-30');
    addJobForm.append('otherLanguages', 'language1,language2');
    addJobForm.append('salary', this.state.salary);

    if (jobType === 'Part Time') {
      addJobForm.append('jobType', jobType);
      addJobForm.append('timeZone', this.state.timeZone);
      addJobForm.append('hourlyWage', this.state.hourlyWage);
      addJobForm.append('workDays', this.state.availableWorkDays);
      addJobForm.append('workHours', '9-14');
    }

    if (jobType === 'Full Time') {
      addJobForm.append('jobType', jobType);
      addJobForm.append('timeZone', '');
      addJobForm.append('hourlyWage', '');
      addJobForm.append('workDays', '');
      addJobForm.append('workHours', '');
    }

    // View values before sending
    for (const value of addJobForm.values()) {
      console.log(value);
    }

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
    // const { transactionId } = this.props.location.state;
    const jobData = this.state;
    // console.log(transactionId);

    return (

      this.props.location.state.jobType === 'Full Time'
        ? <FullTimeFrom
        jobData={jobData}
        handleSelect={this.handleSelect}
        addToList={this.addToList}
        handleChange={this.handleChange}
        handleFileUpload={this.handleFileUpload}
        addJob={this.addJob}/>

        : <PartTimeForm
        jobData={jobData}
        handleSelect={this.handleSelect}
        addToList={this.addToList}
        handleChange={this.handleChange}
        handleFileUpload={this.handleFileUpload}
        addJob={this.addJob}/>
    );
  }
}

export default JobForm;