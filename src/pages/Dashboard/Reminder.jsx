import React from 'react';
import { Link } from 'react-router-dom';

const Reminder = () => (
    <div className="reminder">

      <div>
        <h3>Job Matches</h3>
      </div>

      <div className="reminder-message">
        <h3>
          You have no matches yet
        </h3>

        <p className="small-paragraph">
          Answer a few more questions about your skills
          and interests so we can match you.
        </p>

        <div className="questionnaire-button">
          <Link to="/questionnaire">
          <button className="button-1">
            Start Questionnaire
          </button>
          </Link>
        </div>

      </div>

    </div>
);

export default Reminder;