import React from 'react';


// This is a WIP for modularizing Questions for QnA.
const Question = ({ question, type, valueName }) => {
  switch (type) {
    case 'yesOrNo':
      return (
        <div>
          <p>{`${question}`}</p>
        </div>
      );
    case 'input':
      return (
        <div>
          <p>{`${question}`}</p>
        </div>
      );
    case 'select':
      return (
        <div>
          <p>{`${question}`}</p>
        </div>
      );
    default:
      return (
        <div>
          <p>Question Type Required</p>
        </div>
      );
  }
};

export default Question;