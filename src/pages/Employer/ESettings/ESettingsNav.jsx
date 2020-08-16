import React from 'react';
import { Link } from 'react-router-dom';

const SettingsNav = () => {
  return (
    <div className="sideNav">
      <Link to="/employer/settings/profile">
        <button>
            Profile
        </button>
      </Link>

      <Link to="/employer/settings/account">
        <button>
            Account
        </button>
      </Link>

      <Link to="/employer/settings/jobReqNotifications">
        <button>
            Job Req Notifications
        </button>
      </Link>
    </div>
  );
};

export default SettingsNav;