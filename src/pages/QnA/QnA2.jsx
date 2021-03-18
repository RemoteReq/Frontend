import React, { Component } from 'react';
import Navigation2 from '#parts/Navigation2.jsx';

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
  pageNumber, goNext, goPrev, handleChange, job, addToList, handleSelect, addJob, removeFromList,
}) => {
  switch (pageNumber) {
    case 1:
      return (
        <Basics
          job={job}
          handleChange={handleChange}
          handleSelect={handleSelect}
          goNext={goNext}
        />
      );

    case 2:
      return (
        <Availability
          job={job}
          handleChange={handleChange}
          goNext={goNext}
          goPrev={goPrev}
        />
      );

    case 3:
      return (
        <Experience
          job={job}
          handleChange={handleChange}
          addToList={addToList}
          removeFromList={removeFromList}
          goNext={goNext}
          goPrev={goPrev}
        />
      );
    case 4:
      return (
        <Location
          job={job}
          handleChange={handleChange}
          handleSelect={handleSelect}
          goPrev={goPrev}
          addJob={addJob}
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
        keySkills: [],
        causes: [],
        titles: [],
      },
      progress: 1,
    };

    this.setPage = this.setPage.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
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
      currentPage, progress,
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

          />

        </div>


      </div>
    );
  }
}

export default QnA2;