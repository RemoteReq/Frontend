import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../../components/parts/Navigation2.jsx';
import ProfileCard from './ProfileCard.jsx';
import JobList from './jobList/JobList.jsx';
import ProfileDropdown from './ProfileDropdown.jsx';
// import JobMatches from './JobMatches.jsx';
import Reminder from './Reminder.jsx';
import axios from 'axios';

const backend = 'http://3.21.186.204:3030'

class Dashboard extends Component {
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
    console.log(localStorage.getItem("session"));

    axios({
      url: `${backend}/api/user/getSingleUserDetails`,
      method: 'post',
      headers: {
        token: localStorage.getItem('session'),
      },
    })
    .then(response => {console.log(response)})
    .catch(error => console.log(error))
  }

  render() {
    return (
      <Router>
        <Navigation showProfileMenu={ this.showProfileMenu } />

        <ProfileDropdown profileMenuDropdown= { this.state.profileMenuDropdown } />

        <div className='dashboard'>
          <ProfileCard />

          <Switch>
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

export default Dashboard;