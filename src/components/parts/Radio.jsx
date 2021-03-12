import React from 'react';

const Radio = ({
  value, label, name, handler,
}) => {
  return (
    <label className="radio">
      <input
        type="radio"
        value={value}
        name={name}
        onChange={(e) => { return handler(e); }}
        />
      {label}
    </label>
  );
};

export default Radio;