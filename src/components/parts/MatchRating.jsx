import React from 'react';

const MatchRating = ({ percent }) => {
  return (
    <div className={`c100 p${percent} small`}>
      <div className="slice">
          <div className="bar"></div>
          <div className="fill"></div>
      </div>
    </div>
  );
};

export default MatchRating;