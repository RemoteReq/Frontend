import React, { Component } from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import axios from 'axios';
import Navigation2 from '../../components/parts/Navigation2.jsx';
import Auth from '../../components/Auth/Auth.jsx';
import QnABreadcrumb from './QnABreadcrumb.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';

const backend = 'https://api.remotereq.com';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobType: '', // if part time, render part time QnA. if full time render full time QnA
      progress: 1, // the amount of questions answered
      cause1: '',
      cause2: '',
      cause3: '',
      keySkills: [],
      eligibleToWorkInUS: '',
      soonestJoinDate: '',
      fluentInEnglish: '',
      highestEducationLevel: 0,
      jobChangeReason: '',
      availableWorkDays: [],
      availableWorkHours: '',
      availableHoursFrom: '',
      availableHoursTo: '',
      timeZone: '',
      hourlyWage: 0,
      salary: 0,
      projectDescription: '',
      sampleProjectLink: '',
      relavantCertificates: '',
      isWorkRemotely: '',
      descProfessionalGoal: '',
      totalExperience: '',
      linkedInURL: '',
      personalURL: '',
      mobileNum: '',
      howLongWorkingRemotely: '',
      otherLanguages: [],
      refferedBy: '',
      gender: '',
      race: '',
      veteranStatus: '',
      dob: '',
      desireIndustryType: '',
    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increaseProgress = this.increaseProgress.bind(this);
    this.decreaseProgress = this.decreaseProgress.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.addToList = this.addToList.bind(this);
    this.submitAnswers = this.submitAnswers.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      console.log('retrieving user details... ');

      axios({
        url: `${backend}/api/user/getSingleUserDetails`,
        method: 'post',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
        .then(() => {
          this.setState({
            redirectToReferrer: true,
          }, () => { console.log(this.state); });
        })
        .catch((error) => { return console.log(error); });
    }
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false,
    }, () => {
      console.log('Signing you out... See you next time!');
    });
  }

  handleChange(e) {
    // e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { console.log(this.state); });
  }

  handleNumber(e) {
    e.preventDefault();

    const numberToSet = parseFloat(e.target.value, 10);
    console.log('handling the numbers!', numberToSet);

    this.setState({
      [e.target.name]: numberToSet,
    });
  }

  submitAnswers(e) {
    e.preventDefault();
    const answers = this.state;

    const myCauses = [answers.cause1, answers.cause2, answers.cause3];
    const workHours = `${answers.availableHoursFrom}-${answers.availableHoursTo}`;

    const data = {
      eligibleToWorkInUS: answers.eligibleToWorkInUS,
      causes: myCauses,
      jobType: answers.jobType,
      soonestJoinDate: answers.soonestJoinDate,
      fluentInEnglish: answers.fluentInEnglish,
      highestEducationLevel: answers.highestEducationLevel,
      jobChangeReason: answers.jobChangeReason,
      availableWorkHours: workHours,
      timeZone: answers.timeZone,
      hourlyWage: answers.hourlyWage,
      salary: answers.salary,
      projectDescription: answers.projectDescription,
      sampleProjectLink: answers.sampleProjectLink,
      relavantCertificates: answers.relavantCertificates,
      isWorkRemotely: answers.isWorkRemotely,
      descProfessionalGoals: answers.descProfessionalGoals,
      totalExperience: answers.totalExperience,
      desireLocation: answers.location,
      desireKeySkills: answers.keySkills,
      howLongWorkingRemotely: answers.howLongWorkingRemotely,
      // The following is hardcoded to comply with backend required fields, these MUST be removed on the backend
      // availableWorkDays: ['Monday', 'Wednesday', 'Friday'],
      // otherLanguages: ['language1', 'language2'],
      descProfessionalGoal: 'To become a pro!',
      // race: 'My Ethnicity',
      // veteranStatus: false,
      // dob: '1999-9-9',
      // desireIndustryType: 'Software',
      // gender: 'Male',
      // OR instead, must be part of a different schema
      linkedInURL: 'LinkedInURL.com',
      personalURL: 'myURL.com',
      mobileNum: '555-555-5555',
      // refferedBy: 'Google Analytics',
    };

    console.log(data);

    axios({
      url: `${backend}/api/user/updateUserProfile`,
      method: 'POST',
      headers: {
        token: localStorage.getItem('session'),
      },
      data,
    })
      .then((response) => {
        console.log(response);

        return response.status;
      })
      .then((status) => {
        if (status === 200) {
          this.props.history.push('/dashboard');
        } else {
          console.log('fields are missing answers!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addToList(e) {
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

  removeFromList(e) {
    const arrayToSplice = this.state.keySkills;
    const index = arrayToSplice.indexOf(e.target.value);

    arrayToSplice.splice(index, 1);

    console.log(e.target.value, 'at index: ', index);

    this.setState({
      [e.target.name]: arrayToSplice,
    }, () => {
      console.log(this.state.keySkills);
    });
  }

  isChecked(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  increaseProgress() {
    this.setState({
      progress: this.state.progress + 1,
    });
  }

  decreaseProgress() {
    this.setState({
      progress: this.state.progress - 1,
    });
  }

  setProgress(e) {
    this.setState({
      progress: e.target.value,
    });
  }

  render() {
    const answered = this.state;

    return (
    <div>
      <Navigation2 />

      <div className="QnA">


        <h3>Complete your profile.</h3>
        <p>
          Answer a few more questions about your skills and interests
          so we can better match you to your perfect job.
        </p>


        <form>
          <QnABreadcrumb
            progress={this.state.progress}
            setProgress={this.setProgress}
          />

          <Switch>
            <Route path="/QnA/1" render={(props) => {
              return (
                <Page1 {...props}
                  answered={answered}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  addToList={this.addToList}
                />
              );
            }}/>
            <Route path="/QnA/2" render={(props) => {
              return (
                <Page2 {...props}
                  answered={answered}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  handleNumber={this.handleNumber}
                  addToList={this.addToList}
                />
              );
            }} />
            <Route path="/QnA/3" render={(props) => {
              return (
                <Page3 {...props}
                  answered={answered}
                  myKeySkills={this.state.keySkills}
                  addToList={this.addToList}
                  removeFromList={this.removeFromList}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  />
              );
            }} />
            <Route path="/QnA/4" render={(props) => {
              return (
                <Page4 {...props}
                  answered={answered}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  submitAnswers={this.submitAnswers}
                />
              );
            }} />
          </Switch>
        </form>
      </div>
    </div>
    );
  }
}

export default QnA;