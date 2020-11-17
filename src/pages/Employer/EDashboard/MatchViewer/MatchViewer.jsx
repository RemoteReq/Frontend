import React, { Component } from 'react';
import ENav from '../../ENav/ENav.jsx';

class MatchViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { candidate } = this.props.location.state;
    console.log('In the Match Viewer', candidate);

    return (
      <div className="match-viewer">
        <ENav/>

        <form>
          <div className="candidate-name">
            <h3>{candidate.fullName}</h3>

            <h4>{`is a ${candidate.matchingPercentage} % match for the Job Req you posted`}</h4>
          </div>

          <br/>
          <br/>

          <p>Contact Information:</p>
          <p className="small-paragraph">Phone #: &nbsp;{`${candidate.mobileNum}`}</p>
          <p className="small-paragraph">Email: &nbsp;{`${candidate.email}`}</p>
          <p className="small-paragraph">LinkedIn URL: &nbsp;
            <a href={`${candidate.linkedInURL}`}>{`${candidate.linkedInURL}`}</a>
          </p>
          <p className="small-paragraph">Personal URL: &nbsp;
            <a href={`${candidate.personalURL}`}>{`${candidate.personalURL}`}</a>
          </p>
          <p className="small-paragraph">
            <a href={candidate.resumePath || ''}>Resume</a>
          </p>

          <br/>
          <br/>

          <p>About:</p>
          <p className="small-paragraph">{candidate.aboutMe}</p>

          <br/>
          <br/>

          <p>Causes they would like to work on:</p>
          <ul>
            {
              candidate.causes.map((cause, key) => {
                return (
                  <li key={key}>{`${cause}`}</li>
                );
              })
            }
          </ul>

          <br/>
          <br/>

          <p>Why they want to work on these causes:</p>
          <p className="small-paragraph">&quot;{candidate.jobChangeReason}&quot;</p>

          <br/>
          <br/>

          <p>Experience:</p>
          <p className="small-paragraph">Their key skills:</p>
          <ul>

          {
            candidate.desireKeySkills.map((skill, key) => {
              return (
              <li key={key}>{`${skill}`}</li>
              );
            })
          }
          </ul>

          <br/>
          <br/>

          <p className="small-paragraph">Project Showcase Link: &nbsp;
            <a href={`${candidate.sampleProjectLink}`}>{`${candidate.sampleProjectLink}`}</a>
          </p>

          <p className="small-paragraph">About their project:</p>
          <p className="small-paragraph">&quot;{`${candidate.projectDescription}`}&quot;</p>

          <br/>

        </form>
      </div>
    );
  }
}

export default MatchViewer;