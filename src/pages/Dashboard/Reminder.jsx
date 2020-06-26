import React from 'react';
import { Link } from 'react-router-dom';

const Reminder = () => (
    <div className="reminder">

      <div>
        <h3>Job Matches</h3>
      </div>

      <div className="reminder-message">
        <h4>
          You have no matches yet
        </h4>

        <p className="small-paragraph">
          Answer a few more questions about your skills
          and interests so we can match you.
        </p>

        <Link to="/questionnaire">
          <button className="button-1">
            Start Questionnaire
          </button>
        </Link>

      </div>

    </div>
);

export default Reminder;