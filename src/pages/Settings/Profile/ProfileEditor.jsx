import React, { Component } from 'react';

class ProfileEditor extends Component {
  constructor(props) {
    super(props);

    this.userDetails = this.props.userDetails || '';
  }


  render() {
    document.title = 'Your Profile';
    const { userDetails } = this;
    console.log(userDetails);

    return (
    <div className="profile-editor">
      <h3>Your Profile</h3>
      <form>
        <label>Name</label>
        <input
          defaultValue={`${userDetails.firstName} ${userDetails.lastName}`}
        />

        <label>About</label>
        <div className="textarea-div">
          <textarea
            defaultValue={`${userDetails.about || ''}`}
            />
        </div>

        <label>Cause</label>
        <input
          defaultValue={`${userDetails.cause || ''}`}
        />

        <label>Education</label>
        <input/>

        <button className="button-1">Submit</button>
      </form>
    </div>
    );
  }
}

export default ProfileEditor;