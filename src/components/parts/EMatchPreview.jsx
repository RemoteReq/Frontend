import React from 'react';

// A Link-less version of EMatchRating.jsx to prevent accidental candidate preview

const EMatchPreview = ({ percent, candidate }) => {
  const candidateInitials = candidate.fullName.split(' ').map((n) => { return n[0]; }).join(' ');

  return (
    <div className="match-rating">
      <div className={`c100 p${percent}`}>
        <span>
          <div className="match-label">
            <p>{candidateInitials}</p>
            <p>{percent}%</p>
          </div>
        </span>
        <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
        </div>
      </div>
    </div>
  );
};

export default EMatchPreview;