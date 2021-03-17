import React from 'react';
import { salaries } from '#assets/inputs/inputs';

const SalarySelector = ({ onChange, name, value }) => {
  return (
    <div className="select">
      <label>{name || 'Salary'}</label>
      <select
        value={value}
        type="number"
        name={name || 'salary'}
        onChange={onChange}
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