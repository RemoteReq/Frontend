import React, { Component } from 'react';
import Axios from 'axios';

class RequestADemo extends Component {
  constructor(props) {
    super(props);

    this.state = {};

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

    Axios.post('https://api.remotereq.com/subscribe', {
      body,
    })
      .then((response) => {
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
    return (
      <div className="request-a-demo">
        <form>
          <h3>Request a Demo</h3>

          <p>Let's learn about your company and interests so we can best meet your business needs</p>

          <input
            placeholder="Your Name (Required)"
            name="name"
            onChange={(e) => { this.handleChange(e); }}
          />
          <input
            placeholder="Company E-mail (Required)"
            name="emailId"
            onChange={(e) => { this.handleChange(e); }}
          />
          <input
            placeholder="Company"
            name="companyName"
            onChange={(e) => { this.handleChange(e); }}
          />
          <input
            placeholder="Title"
            name=""
            onChange={(e) => { this.handleChange(e); }}
          />

          <button
            className="e-button"
            onClick={(e) => { this.handleSubmit(e); }}
          >Submit</button>

        </form>
      </div>
    );
  }
}

export default RequestADemo;