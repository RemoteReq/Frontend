import React from 'react';
import Select from 'react-select';
import causes from '#assets/inputs/new/new-causes.js';

const MultiCauseSelector = ({
  causesList, addToList, removeFromList,
}) => {
  causesList = causesList || [];

  return (
    <div className="multi-cause-selector">

    <div className="skill-bank">
        <Select
          name="causes"
          onChange={addToList}
          options={causes}
        />

        <div className="skill-box">
          <p className="small-paragraph">Causes: </p>

          <ul>
            {
              causesList.map((myCause, key) => {
                return (
                  <li key={key}>
                    <div className="skill">
                      <input
                        readOnly
                        value={myCause}
                        name="cause"
                        onClick={(e) => { return removeFromList(e); }}
                      />

                      <div className="remove-icon">
                        <p className="small-paragraph">X</p>
                      </div>
                    </div>
                  </li>
                );
              })
              }
          </ul>
        </div>
      </div>

    </div>
  );
};

export default MultiCauseSelector;