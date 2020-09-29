import React from 'react';
import CauseSelector from './CauseSelector.jsx';

const MultiCauseSelector = ({ handleChange }) => {
  return (
    <div className="multi-cause-selector">
      <CauseSelector handleChange={handleChange} name="cause1"/>
      <CauseSelector handleChange={handleChange} name="cause2"/>
      <CauseSelector handleChange={handleChange} name="cause3"/>
    </div>
  );
};

export default MultiCauseSelector;