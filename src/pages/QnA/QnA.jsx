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
import {
  salaries, causes, degrees, timeZones, keySkills,
} from '#assets/inputs/inputs';

const backend = 'http://3.21.186.204:3030';

class QnA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typingWork: 'either', // if part time, render part time QnA. if full time render full time QnA
      progress: 1, // the amount of questions answered
    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increaseProgress = this.increaseProgress.bind(this);
    this.decreaseProgress = this.decreaseProgress.bind(this);
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
          <QnABreadcrumb progress={this.state.progress}/>

          <Switch>
            <Route path="/QnA/1" render={(props) => {
              return (
                <Page1 {...props}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  causes={causes}
                />
              );
            }}/>
            <Route path="/QnA/2" render={(props) => {
              return (
                <Page2 {...props}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  typingWork={this.state.typingWork}
                  salaries={salaries}
                  degrees={degrees}
                  timeZones={timeZones}
                />
              );
            }} />
            <Route path="/QnA/3" render={(props) => {
              return (
                <Page3 {...props}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
                  handleChange={this.handleChange}
                  keySkills={keySkills}
                />
              );
            }} />
            <Route path="/QnA/4" render={(props) => {
              return (
                <Page4 {...props}
                  increaseProgress={this.increaseProgress}
                  decreaseProgress={this.decreaseProgress}
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

export default QnA;