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
          <div className="QnA-map">
            This is a nav for the rest of the form..
          </div>

          <Switch>
            <Route path="/QnA/basics" component={QnABasics}/>
            <Route path="/QnA/causes" component={QnACauses}/>
            <Route path="/QnA/experience" component={QnAExperience}/>
            <Route path="/QnA/expectations" component={QnAExpectations}/>
          </Switch>
        </form>
      </div>
    </div>
    );
  }
}

const Radio = ({ value, label, name }) => {
  return (
    <div className="radio">
      <input
        type="radio"
        value={value}
        name={name}
        />
      <label>{label}</label>
    </div>
  );
};

const QnABasics = () => {
  return (
    <div className="QnA-page">
      <p>
        Are you eligible to work in the United States?
      </p>
      <div className="radios">
        <Radio value="yes" label="yes" name="eligibleToWorkInUS"/>

        <Radio value="no" label="no" name="eligibleToWorkInUS"/>
      </div>

      <p>
        What is your highest level of education?
      </p>
      <select>
        <option value="College">College</option>
        <option value="University">University</option>
      </select>

      <p>
        Are you fluent in English?
      </p>

      <div className="radios">
        <Radio value="yes" label="yes" name="fluentInEnglish"/>
        <Radio value="no" label="no" name="fluentInEnglish"/>
      </div>

      <p>
        Are you fluent in other languages?
      </p>

      <select>
        <option value="languages">Languages</option>
      </select>

      <div className="form-nav">
        <Link to="/Dashboard">
          <button>Back</button>
        </Link>

        <Link to="/QnA/causes">
          <button className="button-1">Next</button>
        </Link>
      </div>
    </div>
  );
};

const QnACauses = () => {
  return (
    <div>
      <p>
        Selections of Causes here
      </p>

      <div className="form-nav">
        <Link to="/QnA/basics">
          <button>Prev</button>
        </Link>

        <Link to="/QnA/experience">
          <button className="button-1">Next</button>
        </Link>
      </div>
    </div>
  );
};

const QnAExperience = () => {
  return (
    <div>
      <p>
        Form of Experience Here
      </p>

      <div className="form-nav">
        <Link to="/QnA/casuses">
          <button>Prev</button>
        </Link>

        <Link to="/QnA/expectations">
          <button className="button-1">Next</button>
        </Link>
      </div>
    </div>
  );
};

const QnAExpectations = () => {
  return (
    <div>
      <p>
        Form of Expectations Here
      </p>

      <div className="form-nav">
        <button></button>

        <button className="button-1">Submit</button>
      </div>
    </div>
  );
};

export default QnA;