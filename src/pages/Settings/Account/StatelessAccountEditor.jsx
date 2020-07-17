import React from 'react';

const StatelessAccountEditor = ({ userDetails, handleChange, handleSubmit }) => {
  document.title = 'Account Settings';

  return (
    <div className="account-editor">
  <h3>Your Account</h3>

  <form>
    <div>
      <label>Email</label>
      <input
        readOnly
        defaultValue={`${userDetails.email}`}
        />

      <label>Username</label>
      <input
        readOnly
        defaultValue={`${userDetails.username}`}
        />

      <label>Phone Number</label>
      <input
        name="mobileNum"
        defaultValue={`${userDetails.mobileNum}`}
        onChange={(e) => { handleChange(e); }}
        />

      <button
        className="button-1"
        onClick={(e) => { handleSubmit(e); }}
        >Submit</button>

      <br/>
      <label>Delete Account</label>
      <p className="small-paragraph">
        Figure out a safe order of operations to delete a User Account before submitting a delete request.
        Like adding an OTP or something
      </p>
      <br/>
      <button

      >Delete</button>
      <br/>
    </div>

  </form>
</div>
  );
};

export default StatelessAccountEditor;