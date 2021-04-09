import React from 'react';

const JobBadge = ({ availability }) => {
  return (
    <p className={`job-badge ${availability}`}>
      {availability}
    </p>
  );
};

const TimeBadge = ({ jobType }) => {
  return (
    <p className={`job-badge ${jobType}`}>
      {jobType}
    </p>
  );
};

const BadgeContainer = ({ availability, jobType }) => {
  return (
    <div className="job-badges">
      {
        availability ? <JobBadge availability={availability}/> : <></>
      }

      {
        jobType ? <TimeBadge jobType={jobType} /> : <></>
      }
    </div>
  );
};

export default BadgeContainer;