import React, { Component } from 'react';
import {
  Link, Route, Switch,
} from 'react-router-dom';
import axios from 'axios';
import Navigation2 from '../../components/parts/Navigation2.jsx';
import Auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { console.log(this.state); });
  }

  isChecked(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  render() {
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
          {/* <div className="QnA-map">
            This is a nav for the rest of the form..
          </div> */}

          <Switch>
            <Route path="/QnA/basics" render={(props) => {
              return (
                <QnABasics {...props}
                  handleChange={this.handleChange}
                />
              );
            }}/>
            <Route path="/QnA/causes" render={(props) => {
              return (
                <QnACauses {...props}
                  handleChange={this.handleChange}
                />
              );
            }} />
            <Route path="/QnA/experience" render={(props) => {
              return (
                <QnAExperience {...props}
                  handleChange={this.handleChange}
                />
              );
            }} />
            <Route path="/QnA/expectations" render={(props) => {
              return (
                <QnAExpectations {...props}
                  handleChange={this.handleChange}
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

const Radio = ({
  value, label, name, handler,
}) => {
  return (
    <div className="radio">
      <input
        type="radio"
        value={value}
        name={name}
        onChange={(e) => { return handler(e); }}
        />
      <label>{label}</label>
    </div>
  );
};

const QnABasics = ({ handleChange }) => {
  return (
    <div className="QnA-page">
      <p>
        Are you eligible to work in the United States?
      </p>
      <div className="radios">
        <Radio value={true} label="yes" name="eligibleToWorkInUS" handler={handleChange}/>

        <Radio value={false} label="no" name="eligibleToWorkInUS" handler={handleChange}/>
      </div>

      <p>
        What is your highest level of education?
      </p>
      <select
        onChange={handleChange}
        name="education"
        >
        <option value="College">College</option>
        <option value="University">University</option>
      </select>

      <p>
        Are you fluent in English?
      </p>

      <div className="radios">
        <Radio value={true} label="yes" name="fluentInEnglish" handler={handleChange}/>
        <Radio value={false} label="no" name="fluentInEnglish" handler={handleChange}/>
      </div>

      <p>
        Are you fluent in other languages?
      </p>

      <select>
        <option value="languages">Languages</option>
      </select>

      <div className="form-nav">
        <div></div>
        <Link to="/QnA/causes">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

const QnACauses = () => {
  return (
    <div className="QnA-page">
      <p>
        Selections of Causes here
      </p>
      <select>
        <option>Educational Equity (K-12)</option>
        <option>Immigrant Rights</option>
        <option>Voting Rights</option>
        <option>Youth Extracurriculars (sports, band, etc.)</option>
        <option>Environmental Rights</option>
        <option>Animal Rights</option>
        <option>US Military Veterans</option>
        <option>LGBTQ rights </option>
        <option>Health and Medical Care</option>
        <option>Women’s Rights </option>
        <option>Community Development </option>
        <option>Criminal Justice Reform</option>
        <option>Food Insecurity</option>
        <option>Water and Sanitation</option>
        <option>Arts and Culture </option>
        <option>Religion</option>
      </select>

      <p>
        Why do you want to work on these causes? (Optional 250 words or less)
      </p>

      <div className="textarea-div">
        <textarea/>
      </div>

      <p>
        Are you looking for full-time or part time remote work?
      </p>

      <div>
        <Radio />
        <Radio />
      </div>

      <div className="form-nav">
        <Link to="/QnA/basics">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <Link to="/QnA/experience">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

const QnAExperience = () => {
  return (
    <div className="QnA-page">
      <p>
        Form of Experience Here
      </p>

      <div className="form-nav">
        <Link to="/QnA/causes">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <Link to="/QnA/expectations">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

const QnAExpectations = () => {
  return (
    <div className="QnA-page">
      <p>
        Form of Expectations Here
      </p>

      <div className="form-nav">
        <Link to="/QnA/experience">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <button className="button-next">Submit</button>
      </div>
    </div>
  );
};

export default QnA;