import React from 'react';

const MatchRating = ({ percent, label }) => {
  return (
    <div className={`c100 p${percent} small`}>
      <span>{label}</span>
      <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
      </div>
    </div>
  );
};

export default MatchRating;