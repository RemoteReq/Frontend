import React, { Component } from 'react';
import ProfilePicPlaceholder from '#assets/icons/pngs/Profile.png';
import ENav from '../../ENav/ENav.jsx';

class MatchViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { candidate } = this.props.location.state;

    console.log('In match viewer', candidate);

    return (

      <div className="match-viewer">
        <ENav/>

        <form>
          <div className="match-viewer-header">
            <div>

              <div className="candidate-name">
                <h3>{candidate.fullName}</h3>
                <h4>{`is a ${candidate.matchingPercentage} % match for the Job Req you posted`}</h4>
              </div>

              <br/>
              <br/>

              <div className="contact-info">
                <p>Contact Information:</p>
                <p className="small-paragraph">Phone #: &nbsp;{`${candidate.mobileNum}`}</p>
                <p className="small-paragraph">Email: &nbsp;{`${candidate.email}`}</p>
                <p className="small-paragraph">LinkedIn URL: &nbsp;
                  <a href={`http://${candidate.linkedInURL}`}>{`http://${candidate.linkedInURL}`}</a>
                </p>
                <p className="small-paragraph">Personal URL: &nbsp;
                  <a href={`http://${candidate.personalURL}`}>{`http://${candidate.personalURL}`}</a>
                </p>
                <p className="small-paragraph">
                  <a href={candidate.resumePath || ProfilePicPlaceholder }>Resume</a>
                </p>
              </div>
            </div>

            <div className="profile-pic">
              <img src={candidate.profilePicUrl || ''}/>
            </div>
          </div>


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
          <p className="small-paragraph">{candidate.reasonForCause}</p>

          <br/>
          <br/>

          <p>Experience:</p>
          <p className="small-paragraph">Key skills:</p>
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

          <p className="small-paragraph">Project Description:</p>
          <p className="small-paragraph">{`${candidate.projectDescription}`}</p>

          <br/>

        </form>
      </div>
    );
  }
}

export default MatchViewer;