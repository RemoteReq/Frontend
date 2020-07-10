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
        <div>
          <label>Name</label>
          <input
            defaultValue={`${userDetails.fullName || ''}`}
          />

          <label>About</label>
          <div className="textarea-div">
            <textarea
              defaultValue={`${userDetails.about || ''}`}
              />
          </div>

          <label>Education</label>
          <input/>

          <label>Current Company</label>
          <input />


          <label>LinkedIn URL</label>
          <input />

          <label>Github URL</label>
          <input />

          <label>Twitter Handle</label>
          <input/>

          <label>Personal URL</label>
          <input/>

          <button className="button-1">Submit</button>
        </div>

        <div>
          Image Column
        </div>
      </form>

    </div>
    );
  }
}

export default ProfileEditor;