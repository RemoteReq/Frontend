import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Switch } from 'react-router-dom';
import Navigation2 from '../../components/parts/Navigation2.jsx';
import Auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        .then((response) => {
          this.setState({
            redirectToReferrer: true,
            userDetails: response.data,
          });
          console.log('user details retrieved!', response);
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

  onSubmit() {

  }

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === false) {
      return (
        <Redirect to='signin'/>
      );
    }

    return (
    /*
        Pseudo Design:

        <SettingsNav /> // Displays the routes you can take to edit different parts of your profile

        <Switch>
          <ProfileEditor   exact route="/profile"/> // Should find a way to default '/settings to '/settings/profile
          <JobFinderEditor exact route="/jobFinder"/>
          <AccountEditor   exact route="/account"/>
        <Switch />
      */
      <div>
        <Navigation2 />
        <div>
          Edit Profile


          <form>
            <input></input>

            <input></input>


            <button className="button-1">Submit Changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;