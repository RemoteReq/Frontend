import React, { Component } from 'react';

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

    console.log(this.state);
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
            onChange={(e) => { this.onChange(e); }}
          >
          </input>

          <input
            name="confirmPassword"
            type="password"
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

export default ResetPassword;