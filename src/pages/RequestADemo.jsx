import React, { Component } from 'react';
import Axios from 'axios';
import ThankYou2 from './ThankYou/ThankYou2.jsx';

class RequestADemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: this.state.name,
      emailId: this.state.emailId,
      companyName: this.state.companyName,
      phoneNumber: this.state.phoneNumber,
    };

    console.log(this.state, 'current state');

    console.log('payload', body);

    Axios.post('https://api.remotereq.com/api/requestDemo', body)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            submitted: true,
          });
        }

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { submitted } = this.state;

    return (
      <div className="request-a-demo">

      {
        submitted

          ? <ThankYou2/>

          : <form>
          <h3>Request a Demo</h3>

          <p>Let's learn about your company and interests so we can best meet your business needs</p>

          <br />
          <br />

          <input
            placeholder="Your Name (Required)"
            name="name"
            onChange={(e) => { this.handleChange(e); }}
          />
          <input
            placeholder="Company"
            name="companyName"
            onChange={(e) => { this.handleChange(e); }}
          />
          <input
            placeholder="Company E-mail (Required)"
            name="emailId"
            onChange={(e) => { this.handleChange(e); }}
          />
          <input
            placeholder="Phone Number (ex: 555-555-5555)"
            name="phoneNumber"
            onChange={(e) => { this.handleChange(e); }}
          />

          <button
            className="e-button"
            onClick={(e) => { this.handleSubmit(e); }}
          >Submit</button>

        </form>

      }
      </div>
    );
  }
}

export default RequestADemo;