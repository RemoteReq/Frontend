import React, { Component } from 'react';
import ShowPassword from '#assets/icons/pngs/flaticon/eye-close-up.png';
import HidePassword from '#assets/icons/pngs/flaticon/invisible.png';

class PasswordField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentType: 'password',
      eyelidState: ShowPassword,
    };

    this.toggleFieldType = this.toggleFieldType.bind(this);
  }

  toggleFieldType(e) {
    e.preventDefault();

    const { currentType } = this.state;

    if (currentType === 'password') {
      this.setState({
        currentType: 'text',
        eyelidState: HidePassword,
      });
    } else {
      this.setState({
        currentType: 'password',
        eyelidState: ShowPassword,
      });
    }
  }

  render() {
    const { currentType } = this.state;
    const { eyelidState } = this.state;

    return (
      <div className="password-field">
        <input
          type={currentType}
          name="password"
          autoComplete="current-password"
          onChange={(e) => { return this.props.onChange(e); }}
          placeholder="Password"
        />
        <button
          className="eyelid"
          onClick={(e) => { this.toggleFieldType(e); }}
        >
          <img src={eyelidState}/>
        </button>
      </div>
    );
  }
}

export default PasswordField;