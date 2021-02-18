import React from 'react';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  console.log(job);

  const previewDetails = job.jobDetails.substring(0, 128);

  return (
  <div className="employer-job-listing">

    <Link
      to={{
        pathname: `/employer/jobs/${job._id}`,
        state: {
          job,
        },
      }}
    >
      <div>
        <div className="upper-job-listing">
          <h4 className="job-listing-title">{job.title}</h4>

          {
            job.matchesCandidateCount

              ? <div className="job-listing-alerts">
                <div className="match-counter">
                  <p>
                    Matched
                  </p>
                </div>

                <div className={`${job.expireStatus === true && job.hiringPaymentStatus === null ? 'job-expire-status' : 'hide'}`}>
                  <p>
                    !
                  </p>
                </div>
              </div>

              : <div></div>
          }
        </div>

        <h5>{job.companyName}</h5>

        </div>

        <div className="lower-job-listing">
          <p className="small-paragraph">
            {previewDetails}
          </p>
        </div>
    </Link>

  </div>
  );
};

export default JobListing;