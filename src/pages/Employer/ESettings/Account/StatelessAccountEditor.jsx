import React from 'react';
import Divider from '#parts/Divider.jsx';

const StatelessAccountEditor = ({
  userDetails, handleChange, handleSubmit, handleDeleteAccount, handleConfirmUsername,
}) => {
  document.title = 'Account Settings';

  return (
    <div className="account-editor">
      <h3>Your Account</h3>

      <Divider/>

      <form>
        <div>
          <label>Username</label>
          <input
            readOnly
            defaultValue={`${userDetails.username}` || ''}
            />

          <label>Email</label>
          <input
            readOnly
            defaultValue={`${userDetails.email}` || ''}
            />
{/*
          <button
            className="button-1"
            onClick={(e) => { handleSubmit(e); }}
            >Update</button> */}

        </div>
      </form>

      <Divider />

      <h3>Password</h3>

      <form>
        <div>

          <label>Old password</label>
          <input
            type="password"
          />

          <label>New Password</label>
          <input
            type="password"
          />

          <label>Confirm new password</label>
          <input
            type="password"
          />

          <button
            className="button-1"
          >Update</button>
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