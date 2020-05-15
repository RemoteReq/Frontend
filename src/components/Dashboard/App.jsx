import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import ProfileCard from './ProfileCard.jsx';
import JobList from './jobList/JobList.jsx';
import ProfileDropdown from './ProfileDropdown.jsx';
// import JobMatches from './JobMatches.jsx';
import Reminder from './Reminder.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobListing: [],
      profileMenuDropdown: false,
    };

    this.showProfileMenu = this.showProfileMenu.bind(this);
  }

  showProfileMenu() {
    this.setState({ profileMenuDropdown: !this.state.profileMenuDropdown });
  }

  componentDidMount() {
    fetch('http://localhost:3030/api/jobs')
      .then((response) => response.json())
      .then((response) => {
        this.setState({ jobListing: response });
      })
      .catch((err) => console.log('you have an error, ', err));
  }

  render() {
    return (
      <Router>
        <Navigation showProfileMenu={ this.showProfileMenu } />

        <ProfileDropdown profileMenuDropdown= { this.state.profileMenuDropdown } />

        <div className='dashboard'>
          <ProfileCard />

          <Switch>

            {/*
              If the user hasn't submitted their questionnaire yet, then the Reminder should be displayed
              Otherwise display a list of Jobs
            */}

            <Route
              path='/joblist'
              render={
                () => <JobList jobs={this.state.jobListing}/>
              }
            />

            <Route
              path='/dashboard'
              component={Reminder}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;