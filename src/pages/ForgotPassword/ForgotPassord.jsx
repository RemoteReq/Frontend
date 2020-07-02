import React, { Component } from 'react';

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

    console.log(this.state);
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