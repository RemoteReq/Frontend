import React from 'react';

const Radio = ({
  value, label, name, handler,
}) => {
  return (
    <div className="radio">
      <input
        type="radio"
        value={value}
        name={name}
        onChange={(e) => { return handler(e); }}
        />
      <label>{label}</label>
    </div>
  );
};

export default Radio;