import React from 'react';
import { salaries } from '#assets/inputs/inputs';

const SalarySelector = ({ handleChange, name }) => {
  return (
    <div className="select">
      <select
        type="number"
        name={name || 'salary'}
        onChange={handleChange}
        >
          <option>-----</option>
            {
              salaries.map((salary, key) => {
                return (
                  <option value={salary.value} key={key}>{salary.option}</option>
                );
              })
            }
      </select>
    </div>
  );
};

export default SalarySelector;