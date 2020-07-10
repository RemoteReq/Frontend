import React, { Component } from 'react';
import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

class AccountEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNum: '',
    };

    this.userDetails = this.props.userDetails || '';
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: `${e.target.value}`,
    }, () => { return console.log('New account state', this.state); });
  }

  submitForm(e) {
    e.preventDefault();

    const body = {
      mobileNum: this.state.mobileNum,
    };

    axios({
      method: 'POST',
      url: `${backend}/api/user/updateUserProfile`,
      headers: {
        token: localStorage.getItem('token'),
      },
      body,
    })
      .then((response) => {
        console.log('update reponse', response);
      });
  }

  render() {
    document.title = 'Account Settings';
    const { userDetails } = this;

    return (
      <div className="account-editor">
      <h3>Your Account</h3>

      <form>
        <div>
          <label>Email</label>
          <input
            readOnly
            defaultValue={`${userDetails.email}`}
          />

          <label>Username</label>
          <input
            readOnly
            defaultValue={`${userDetails.username}`}
          />

          <label>Phone Number</label>
          <input
            name="mobileNum"
            defaultValue={`${userDetails.mobileNum}`}
            onChange={(e) => { return this.handleChange(e); }}
          />

          <button
            className="button-1"
            onClick={(e) => { this.submitForm(e); }}
          >Submit</button>

          <br/>
          <label>Delete Account</label>
          <p className="small-paragraph">
            Figure out a safe order of operations to delete a User Account before submitting a delete request.
            Like adding an OTP or something
          </p>
          <br/>
          <button>Delete</button>
          <br/>
        </div>

      </form>
    </div>
    );
  }
}

export default AccountEditor;