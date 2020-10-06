import React from 'react';
import { Link } from 'react-router-dom';

const EMatchRating = ({ percent, candidate }) => {
  const candidateInitials = candidate.fullName.split(' ').map((n) => { return n[0]; }).join(' ');

  return (
    <Link
      to={{
        pathname: `/employer/match/${candidate._id}`,
        state: {
          candidate,
        },
      }}
    >
      <div className={`c100 p${percent}`}>
        <span>{candidateInitials}</span>
        <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
        </div>
      </div>
    </Link>
  );
};

export default EMatchRating;