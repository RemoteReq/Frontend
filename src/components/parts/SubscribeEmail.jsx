import React, { Component } from 'react';
import axios from 'axios';

const backend = 'http://18.188.99.44:3030';

class SubscribeEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      email: e.target.value,
    });
  }

  submitEmail(e) {
    e.preventDefault();
    const { email } = this.state;
    const input = document.getElementById('subscribe-email');

    const body = {
      emailId: email,
    };

    if (email) {
      axios.post(`${backend}/api/subscribe`, body)
        .then((res) => {
          console.log(res);
        })
        .then(
          () => {
            input.value = '';
          },
        )
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('Please enter an email');
    }
  }

  render() {
    return (
      <div className="subscribe">
        <input
        id="subscribe-email"
          type="email"
          placeholder="Email"
          onChange={(e) => { return this.handleChange(e); }}
        />
        <button
          onClick={(e) => { return this.submitEmail(e); }}
        >Subscribe</button>
      </div>
    );
  }
}

export default SubscribeEmail;