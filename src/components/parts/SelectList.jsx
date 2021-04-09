import React from 'react';
import Select from 'react-select';
import JobTitles from '#assets/inputs/new/new-job-titles.js';
import Causes from '#assets/inputs/new/new-causes.js';
import KeySkills from '#assets/inputs/new/new-keySkills.js';
import Locations from '#assets/inputs/new/new-locations.js';

const GetList = (name) => {
  switch (name) {
    case 'title':
      return JobTitles;
    case 'keySkills':
      return KeySkills;
    case 'desireKeySkills':
      return KeySkills;
    case 'cause':
      return Causes;
    case 'causes':
      return Causes;
    case 'states':
      return Locations;
    default:
      return [];
  }
};

const SelectList = ({
  data, name, addToList, removeFromList, label,
}) => {
  data = data || [];

  const options = GetList(name);

  return (
    <div className="select-list">

      <Select
        name={name}
        options={options}
        onChange={addToList}
      />

      <label>{label}</label>

      <div className="item-list">
        {
          data.map((item, i) => {
            return (
              <button
                className="list-item"
                key={i}
                name={name}
                value={item}
                onClick={removeFromList}
              >
                {`${item} `} &#10006;
              </button>
            );
          })
        }
      </div>
    </div>
  );
};
export default SelectList;