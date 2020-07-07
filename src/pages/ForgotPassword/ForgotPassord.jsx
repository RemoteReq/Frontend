import React, { Component } from 'react';
import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    this.setState({
      email: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const body = {
      email: this.state.email,
    };

    axios.post(`${backend}/api/signin/forgotPassword`, body)
      .then(() => { return console.log('sending email for passwordrecovery!'); })
      .catch(() => { return console.log('unable to send email for password recovery'); });
  }

  render() {
    return (
      <div className="forgot-password">

        <form>
          <p className="small-paragraph">Enter your email address and we will provide you a link to reset your password.</p>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => { this.onChange(e); }}
          ></input>

          <button
            className="button-1"
            onClick={(e) => { this.handleSubmit(e); }}
          >Request Password Reset</button>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;