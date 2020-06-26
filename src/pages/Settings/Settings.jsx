import React, { Component } from 'react';
import axios from 'axios';
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
        .catch((error) => console.log(error));
    }
  }

  onSubmit() {

  }

  render() {
    return (
      <div>
        Edit Profile

        <form>

        </form>
      </div>
    );
  }
}

export default Settings;