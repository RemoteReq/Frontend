import React from 'react';

const Reminder = () => (
    <div className="reminder">

      <div>
        <h1>Job Matches</h1>
      </div>

      <div className="reminder-message">
        <h3>
          You have no matches yet
        </h3>

        <p>
          Answer a few more questions about your skills
          and interests so we can match you.
        </p>

        <div className="questionnaire-button">
          <button className="blue-block-button">
            Start Questionnaire
          </button>
        </div>

      </div>

    </div>
);

export default Reminder;