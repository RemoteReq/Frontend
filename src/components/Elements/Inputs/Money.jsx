import React from 'react';
import CurrencyInput from 'react-currency-input-field';

const Wage = ({ defaultValue, onChange }) => {
  return (
    <div className="input-per-unit">
      <CurrencyInput
        name="hourlyWage"
        prefix="$"
        placeholder="$0.00"
        decimalsLimit={2}
        defaultValue={defaultValue}
        onValueChange={onChange}
        step={1}
        />

      <p>/ hr</p>
    </div>
  );
};

const Salary = ({ defaultValue, onChange }) => {
  return (
    <div className="input-per-unit">
      <CurrencyInput
        name="salary"
        prefix="$"
        placeholder="$0"
        defaultValue={defaultValue}
        onValueChange={onChange}
        step={1000}
        />

        <p>/ year</p>
    </div>
  );
};

export {
  Wage, Salary,
};