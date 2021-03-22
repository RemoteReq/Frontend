import React from 'react';

const Radio = ({
  value, label, name, checked, onChange,
}) => {
  return (
    <label className="radio">
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        />
      {label}
    </label>
  );
};

export default Radio;