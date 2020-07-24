import React, { Component } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

const ResetPasswordQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ResetPasswordWrapper = () => {
  const query = ResetPasswordQuery();

  return (
    <ResetPassword resetPasswordID={query.get('resetToken')} />
  );
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      confirmPassword: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  checkPasswordMatch() {

  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClick(e) {
    e.preventDefault();
    const { password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      // Request should only be sent if the passwords match
      console.log('Sending password reset request');

      const body = {
        newPassword: confirmPassword,
      };

      axios.post(`${backend}/api/signin/resetPassword?resetToken=${this.props.resetPasswordID}`, body)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // When they passwords do no match, highlight the inputs in red
      console.log('Passwords do not match');
    }
  }

  render() {
    return (
      <div className="reset-password">

        <form>
          <p className="small-paragraph">
            Please enter your new password and confirm it.
          </p>

          <input
            name="password"
            type="password"
            placeholder="New Password"
            onChange={(e) => { this.onChange(e); }}
          >
          </input>

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm New Password"
            onChange={(e) => { this.onChange(e); }}
          >
          </input>

          <button
            className="button-1"
            onClick={(e) => { this.onClick(e); }}
          >Reset Password</button>
        </form>
      </div>
    );
  }
}

export default ResetPasswordWrapper;