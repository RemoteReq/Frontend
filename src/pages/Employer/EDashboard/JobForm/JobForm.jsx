import React, { Component } from 'react';
import Axios from 'axios';
import EAuth from '../../EAuth/EAuth.jsx';
import PartTimeForm from './PartTimeForm.jsx';
import FullTimeFrom from './FullTimeForm.jsx';

const backend = 'http://3.21.186.204:3030';

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
      availableHoursFrom: '',
      availableHoursTo: '',
      salary: 0,
      minExperience: 0,
      maxExperience: 0,
      location: '',
      numberOfCandidate: 1,
      percentageMatch: 20,
      fields: {
        // Side 1
        title: {
          isFilled: false,
        },
        companyName: {
          isFilled: false,
        },
        cause: {
          isFilled: false,
        },
        jobDetails: {
          isFilled: false,
        },
        keySkills: {
          isFilled: false,
        },
        soonestJoinDate: {
          isFilled: false,
        },
        // Side 2
        hourlyWage: {
          isFilled: false,
        },
        numberOfHours: {
          isFilled: false,
        },
        minExperience: {
          isFilled: false,
        },
        maxExperience: {
          isFilled: false,
        },
        requiredEducationLevel: {
          isFilled: false,
        },
        location: {
          isFilled: false,
        },
        timeZone: {
          isFilled: false,
        },
        // notifcation settings
        numberOfCandidate: {
          isFilled: false,
        },
        percentageMatch: {
          isFilled: false,
        },
        eligibleToWorkInUS: {
          isFilled: false,
        },
        fluentInEnglish: {
          isFilled: false,
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.addJob = this.addJob.bind(this);
    this.addToList = this.addToList.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  componentDidMount() {
    const { jobType } = this.props.location.state;

    Axios({
      url: `${backend}/api/employers/getSingleEmployer`,
      method: 'post',
      headers: {
        token: localStorage.getItem('e-session'),
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          jobType,
          companyLogo: response.data.companyLogo,
          companyWebsiteURL: response.data.companyWebsite,
        }, () => { console.log(this.state); });
      });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
      fields: {
        ...this.state.fields,
        [e.target.name]: {
          isFilled: !!e.target.value,
        },
      },
    }, () => { return console.log(this.state); });
  }

  handleNumber(e) {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10),
      fields: {
        ...this.state.fields,
        [e.target.name]: {
          isFilled: !!e.target.value,
        },
      },
    }, () => { return console.log(this.state); });
  }

  handleSelect(e) {
    e.preventDefault();

    this.setState({
      [e.targe.name]: e.target.value
      ,
    }, () => { return console.log(this.state); });
  }

  handleFileUpload(e) {
    e.preventDefault(e);

    console.log(e.target.files);

    this.setState({
      [e.target.name]: e.target.files[0],
      fields: {
        ...this.state.fields,
        [e.target.name]: {
          isFilled: !!e.target.value,
        },
      },
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

  // Should be fired before addJob's post request
  checkFields() {

  }

  addJob(e) {
    e.preventDefault();

    const addJobForm = new FormData();

    const { jobType } = this.state;
    const workHours = `${this.state.availableHoursFrom}-${this.state.availableHoursTo}`;

    addJobForm.append('transactionIdForAddJob', 'sample job for testing');
    // addJobForm.append('transactionIdForAddJob', this.props.location.state.transactionId);


    addJobForm.append('companyLogoPath', this.state.companyLogo);
    addJobForm.append('jobDescription', this.state.jobDescription);
    addJobForm.append('companyWebsiteUrl', this.state.companyWebsite);

    // Comment and uncomment for testing
    // addJobForm.append('companyLogoPath', 'test.jpg');
    // addJobForm.append('jobDescription', 'pdf.pdf');
    // addJobForm.append('companyWebsiteUrl', 'http://www.websiteURL.com');


    addJobForm.append('title', this.state.title);
    addJobForm.append('companyName', this.state.companyName);
    addJobForm.append('cause', this.state.cause);
    addJobForm.append('jobDetails', this.state.jobDetails);
    addJobForm.append('keySkills', this.state.keySkills);
    addJobForm.append('requiredEducationLevel', this.state.requiredEducationLevel);
    addJobForm.append('minExperience', this.state.minExperience);
    addJobForm.append('maxExperience', this.state.maxExperience);
    addJobForm.append('location', this.state.location);
    addJobForm.append('soonestJoinDate', this.state.soonestJoinDate);
    addJobForm.append('otherLanguages', ['language1', 'language2']);

    // This field shouldn't be required either, since the form may or may not be full time
    addJobForm.append('salary', this.state.salary);

    // --- !! This field must be deleted on the backend !! --
    addJobForm.append('industryType', 'Software');

    // notification settings
    addJobForm.append('numberOfCandidate', this.state.numberOfCandidate);
    addJobForm.append('percentageMatch', this.state.percentageMatch);
    addJobForm.append('eligibleToWorkInUS', this.state.eligibleToWorkInUS);
    addJobForm.append('fluentInEnglish', this.state.fluentInEnglish);

    if (jobType === 'Part Time') {
      addJobForm.append('jobType', jobType);
      addJobForm.append('timeZone', this.state.timeZone);
      addJobForm.append('hourlyWage', this.state.hourlyWage);
      addJobForm.append('workDays', ['Monday', 'Wednesday', 'Friday']);
      addJobForm.append('workHours', workHours);
    }

    if (jobType === 'Full Time') {
      addJobForm.append('jobType', jobType);
      addJobForm.append('timeZone', '');
      addJobForm.append('hourlyWage', '');
      addJobForm.append('workDays', '');
      addJobForm.append('workHours', '');
    }

    // View values before sending
    for (const pair of addJobForm.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
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

        return response.status;
      })
      .then((status) => {
        if (status === 200) {
          this.props.history.push('/employer/dashboard');
        } else {
          console.log('fields are missing answers!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // const { transactionId } = this.props.location.state;
    const { fields } = this.state;
    const jobData = this.state;
    // console.log(transactionId);

    return (

      this.props.location.state.jobType === 'Full Time'
        ? <FullTimeFrom
        jobData={jobData}
        fields={fields}
        handleNumber={this.handleNumber}
        handleSelect={this.handleSelect}
        addToList={this.addToList}
        companyLogo={this.state.companyLogo}
        handleChange={this.handleChange}
        handleFileUpload={this.handleFileUpload}
        addJob={this.addJob}/>

        : <PartTimeForm
        jobData={jobData}
        fields={fields}
        handleNumber={this.handleNumber}
        handleSelect={this.handleSelect}
        addToList={this.addToList}
        companyLogo={this.state.companyLogo}
        handleChange={this.handleChange}
        handleFileUpload={this.handleFileUpload}
        addJob={this.addJob}/>
    );
  }
}

export default JobForm;