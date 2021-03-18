import React, { Component } from 'react';
import axios from 'axios';
import Navigation2 from '#parts/Navigation2.jsx';
import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';

const backend = process.env.BASE_URL;

const QnA2BreadCrumbs = ({ setPage, progress }) => {
  return (
    <div className="breadcrumbs">

    <button
      className={`small-button ${progress > 0 ? 'complete' : 'incomplete'}`}
      onClick={(e) => { return setPage(e); }}
      value={1}
    >
      Basics
    </button>

    <div className={`breadcrumb-bar ${progress > 1 ? 'complete' : 'incomplete'}`}></div>

    <button
      className={`small-button ${progress > 1 ? 'complete' : 'incomplete'}`}
      onClick={(e) => { return setPage(e); }}
      value={2}
    >
      Availability
    </button>

    <div className={`breadcrumb-bar ${progress > 2 ? 'complete' : 'incomplete'}`}></div>

    <button
      className={`small-button ${progress > 2 ? 'complete' : 'incomplete'}`}
      onClick={(e) => { return setPage(e); }}
      value={3}
    >
      Experience
    </button>

    <div className={`breadcrumb-bar ${progress > 3 ? 'complete' : 'incomplete'}`}></div>

    <button
      className={`small-button ${progress > 3 ? 'complete' : 'incomplete'}`}
      onClick={(e) => { return setPage(e); }}
      value={4}
    >
      Location
    </button>

    </div>
  );
};

const QSwitch = ({
  answers, pageNumber, goNext, goPrev, handleChange, addToList, handleSelect, removeFromList, submitAnswers,
}) => {
  switch (pageNumber) {
    case 1:
      return (
        <Page1
          answers={answers}
          handleChange={handleChange}
          handleSelect={handleSelect}
          addToList={addToList}
          removeFromList={removeFromList}
          goNext={goNext}
        />
      );

    case 2:
      return (
        <Page2
          answers={answers}
          handleChange={handleChange}
          goNext={goNext}
          goPrev={goPrev}
        />
      );

    case 3:
      return (
        <Page3
          answers={answers}
          handleChange={handleChange}
          addToList={addToList}
          removeFromList={removeFromList}
          goNext={goNext}
          goPrev={goPrev}
        />
      );
    case 4:
      return (
        <Page4
          answers={answers}
          handleChange={handleChange}
          handleSelect={handleSelect}
          goPrev={goPrev}
          submitAnswers={submitAnswers}
        />
      );
    default:
      return (
        <div></div>
      );
  }
};

class QnA2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: {
        eligibleToWorkInUS: '',
        soonestJoinDate: '',
        fluentInEnglish: '',
        highestEducationLevel: 0,
        reasonForCause: '',
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
        totalExperience: '',
        linkedInURL: '',
        personalURL: '',
        mobileNum: '',
        keySkills: [],
        causes: [],
        title: [],
      },
      currentPage: 1,
      progress: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.setPage = this.setPage.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.submitAnswers = this.submitAnswers.bind(this);
  }

  componentDidMount() {
    axios({
      url: `${backend}/api/user/getSingleUserDetails`,
      method: 'post',
      headers: {
        token: localStorage.getItem('session'),
      },
    })
      .then((response) => {
        this.setState({
          answers: {
            ...this.state.answers,
            ...response.data,
            // availability:,
            // causes,
            keySkills: response.data.desireKeySkills,
            // eligibleToWorkInUS: eligibleToWorkInUS,
            // fluentInEnglish: fluentInEnglish,
            // highestEducationLevel: highestEducationLevel,
            // hourlyWage: hourlyWage,
            // howLongWorkingRemotely: howLongWorkingRemotely,
            // jobType: jobType,
            // location: location,
            // personalURL,
            // reasonForCause,
          },
        });
      });
  }

  handleChange(e) {
    console.log('hit');

    this.setState({
      answers: {
        ...this.state.answers,
        [e.target.name]: e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value,
      },
    }, () => { console.log(this.state); });
  }

  handleSelect(option, e) {
    this.setState({
      answers: {
        ...this.state.answers,
        [e.name]: option.value,
      },
    }, () => { return console.log(this.state); });
  }

  addToList(option, e) {
    console.log(option, e);

    let arrayToJoin = this.state.answers[e.name];

    if (!arrayToJoin.includes(option.value)) {
      arrayToJoin = arrayToJoin.concat(option.value);

      this.setState({
        answers: {
          ...this.state.answers,
          [e.name]: arrayToJoin,
        },
      }, () => {
        console.log(this.state);
      });
    }
  }

  removeFromList(e) {
    const arrayToSplice = this.state.answers.keySkills;
    const index = arrayToSplice.indexOf(e.target.value);

    arrayToSplice.splice(index, 1);

    console.log(e.target.value, 'at index: ', index);

    this.setState({
      answers: {
        ...this.state.answers,
        [e.target.name]: arrayToSplice,
      },
    }, () => {
      console.log(this.state);
    });
  }

  setPage(e) {
    e.preventDefault();

    this.setState({
      currentPage: parseInt(e.target.value, 10),
      progress: parseInt(e.target.value, 10),
    }, () => { console.log(this.state); });
  }

  goNext(e) {
    e.preventDefault();

    const { currentPage } = this.state;
    const { progress } = this.state;

    this.setState({
      currentPage: currentPage + 1,
      progress: progress + 1,
    });
  }

  goPrev(e) {
    e.preventDefault();

    const { currentPage } = this.state;
    const { progress } = this.state;

    this.setState({
      currentPage: currentPage - 1,
      progress: progress - 1,
    });
  }

  submitAnswers(e) {
    e.preventDefault();

    console.log('here we go!');

    const { answers } = this.state;
    const availableWorkHours = `${answers.availableHoursFrom}-${answers.availableHoursTo}`;

    const data = {
      ...answers,
      availableWorkHours,
    };

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

  render() {
    const {
      currentPage, progress, answers,
    } = this.state;

    return (
      <div className="job-form-2-page">
        <Navigation2 />

        <div className="job-form-2">

          <QnA2BreadCrumbs
            setPage={this.setPage}
            progress={progress}
          />

          <QSwitch
            answers={answers}
            pageNumber={currentPage}
            progress={progress}
            handleChange={this.handleChange}
            handleSelect={this.handleSelect}
            addToList={this.addToList}
            removeFromList={this.removeFromList}
            goNext={this.goNext}
            goPrev={this.goPrev}
            submitAnswers={this.submitAnswers}
          />

        </div>


      </div>
    );
  }
}

export default QnA2;