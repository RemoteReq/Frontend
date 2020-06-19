import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navigation from '../../components/parts/Navigation2.jsx';
import ProfileCard from './ProfileCard.jsx';
import JobList from './jobList/JobList.jsx';
import ProfileDropdown from './ProfileDropdown.jsx';
// import JobMatches from './JobMatches.jsx';
import Reminder from './Reminder.jsx';
import auth from '../../components/Auth/Auth.js';
import axios from 'axios';

const backend = 'http://3.21.186.204:3030'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobListing: [],
      profileMenuDropdown: false,
    };

    this.updateRedirect = this.updateRedirect.bind(this)
    this.showProfileMenu = this.showProfileMenu.bind(this);
  }

  componentDidMount() {
    // check session status on visit
    console.log('checking auth status...', auth.isAuthenticated());
    if (auth.isAuthenticated()) {

      this.setState({
        redirectToReferrer: true
      });
    }

    // request user details based off token
    console.log('retrieving user details... ');
    axios({
      url: `${backend}/api/user/getSingleUserDetails`,
      method: 'post',
      headers: {
        token: localStorage.getItem('session'),
      },
    })
    .then(response => {console.log('user details retrieved!', response)})
    .catch(error => console.log(error))
  }
  
  showProfileMenu() {
    this.setState({ profileMenuDropdown: !this.state.profileMenuDropdown });
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false
    }, () => {
      console.log('Signing you out.. See you next time!')
    })
  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === false){
      return(
        <Redirect to='signin'/>
      )
    }

    return (
      <Router>
        <Navigation showProfileMenu={ this.showProfileMenu } updateRedirect={this.updateRedirect}/>

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