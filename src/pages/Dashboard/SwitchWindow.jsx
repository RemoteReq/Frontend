import React from 'react';
import Reminder from './Reminder.jsx';
import JobList from './JobList/JobList.jsx';

const SwitchWindow = ({ userDetails, jobs }) => {
  console.log('switch window', userDetails, jobs);

  if (userDetails) {
    if (userDetails.questionSubmitStatus) {
      return (
        <JobList jobs={jobs}/>
      );
    }
    return (
        <Reminder />
    );
  }
  return (
      <div>
        Loading . . .
      </div>
  );
};

export default SwitchWindow;