import React, { Component } from 'react';
import Axios from 'axios';
import ENav from '../../ENav/ENav.jsx';
import Basics from './Questions/Basics.jsx';
import Availability from './Questions/Availability.jsx';
import Experience from './Questions/Experience.jsx';
import Location from './Questions/Location.jsx';

const backend = process.env.BASE_URL;

const CompanyWindow = ({ companyName, companyLogo, companyWebsite }) => {
  return (
    <div className="company-window">
      <div className="image-box">
        <img src={companyLogo || ''}/>
      </div>

      <div>
        <h4>{companyName}</h4>
        <label>Company Website: </label>
        <a href={companyWebsite}>{companyWebsite}</a>
      </div>
    </div>
  );
};

const JobForm2BreadCrumbs = ({ setPage, progress }) => {
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
  pageNumber, goNext, goPrev, handleChange,
}) => {
  switch (pageNumber) {
    case 1:
      return (
        <Basics
          handleChange={handleChange}
          goNext={goNext}
        />
      );

    case 2:
      return (
        <Availability
          handleChange={handleChange}
          goNext={goNext}
          goPrev={goPrev}
        />
      );

    case 3:
      return (
        <Experience
          handleChange={handleChange}
          goNext={goNext}
          goPrev={goPrev}
        />
      );
    case 4:
      return (
        <Location
          handleChange={handleChange}
          goPrev={goPrev}
        />
      );
    default:
      return (
        <div></div>
      );
  }
};

class JobForm2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {},
      currentPage: 1,
      progress: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.setPage = this.setPage.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
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
          companyName: response.data.companyName,
          companyLogo: response.data.companyLogo,
          companyWebsite: response.data.companyWebsite || '',
        }, () => { console.log(this.state); });
      });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      job: {
        ...this.state.job,
        [e.target.name]: e.target.value,
      },
    }, () => { console.log(this.state); });
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

  render() {
    const {
      currentPage, progress, companyWebsite, companyLogo, companyName,
    } = this.state;

    return (
      <div className="job-form-2-page">
        <ENav/>

        <div className="container">
          <CompanyWindow
            companyName={companyName}
            companyLogo={companyLogo}
            companyWebsite={companyWebsite}
          />

          <div className="job-form-2">

            <JobForm2BreadCrumbs
              setPage={this.setPage}
              progress={progress}
              />

            <QSwitch
              pageNumber={currentPage}
              progress={progress}
              handleChange={this.handleChange}
              goNext={this.goNext}
              goPrev={this.goPrev}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default JobForm2;