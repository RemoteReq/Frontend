import React, { Component } from 'react';
import {
  Redirect, Switch, Route,
} from 'react-router-dom';
import axios from 'axios';
import Navigation from '../../components/parts/Navigation2.jsx';
// import ProfileCard from './ProfileCard.jsx';
import StatelessProfileCard from './StatelessProfileCard.jsx';
import JobList from './jobList/JobList.jsx';
import Reminder from './Reminder.jsx';
import QnA from '../QnA/QnA.jsx';
import auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobListing: [],
      profileMenuDropdown: false,
    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.showProfileMenu = this.showProfileMenu.bind(this);
  }

  componentDidMount() {
    // check session status on visit
    console.log('checking auth status...', auth.isAuthenticated());
    if (auth.isAuthenticated()) {
      // request user details based off token

      console.log('retrieving user details... ');

      axios({
        url: `${backend}/api/user/getSingleUserDetails`,
        method: 'post',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
        .then((response) => {
          this.setState({
            redirectToReferrer: true,
            userDetails: response.data,
          }, () => { return console.log('user details retrieved!', this.state); });
        })
        .catch((error) => { return console.log(error); });
    }
  }

  showProfileMenu() {
    this.setState({ profileMenuDropdown: !this.state.profileMenuDropdown });
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false,
    }, () => {
      console.log('Signing you out... See you next time!');
    });
  }

  render() {
    document.title = 'Dashboard';
    const { redirectToReferrer } = this.state;
    const { userDetails } = this.state;

    if (redirectToReferrer === false) {
      return (
        <Redirect to='signin'/>
      );
    }

    return (

      <div>
        <Navigation
          showProfileMenu={ this.showProfileMenu }
          updateRedirect={this.updateRedirect}
        />

        <div className='dashboard'>
          <StatelessProfileCard userDetails={userDetails}/>

          <Switch>
            <Route
              path='/joblist'
              render={
                () => { return <JobList jobs={this.state.jobListing}/>; }
              }
            />

            <Route
              path='/dashboard'
              component={Reminder}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;