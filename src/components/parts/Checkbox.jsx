import React from 'react';

const Checkbox = ({
  name, value, checked, onChange,
}) => {
  console.log(onChange);

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        value={value}
        name={name}
        defaultChecked={checked}
        onChange={onChange}
      />
      {value}
    </label>
  );
};

export default Checkbox;