import React from 'react';
import Divider from '../../../components/parts/Divider.jsx';

const StatelessAccountEditor = ({
  userDetails, handleChange, handleSubmit, handleDeleteAccount, handleConfirmUsername,
}) => {
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
        >Update</button>

      <br/>
      </div>
      </form>

      <Divider />

      <h3>Delete Account</h3>

      <form>
        <div>

          <p className="small-paragraph">
            Delete your account by typing in your RemoteReq Username (Case Sensitive) and
            confirm that you would like to delete your account.
          </p>

          <label>Confirm Username</label>
          <input
            onChange={(e) => { handleConfirmUsername(e); }}
            />

          <button
            onClick={(e) => { handleDeleteAccount(e); }}
          >Delete</button>

        </div>
      </form>

</div>
  );
};

export default StatelessAccountEditor;