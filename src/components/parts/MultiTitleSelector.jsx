import React from 'react';
import Select from 'react-select';
import jobTitles from '#assets/inputs/new/new-job-titles.js';

const MultiJobSelector = ({ titlesList, addToList, removeFromList }) => {
  titlesList = titlesList || [];

  return (
    <div className="multi-cause-selector">

    <div className="skill-bank">
        <Select
          name="title"
          onChange={addToList}
          options={jobTitles}
        />

        <div className="skill-box">
          <p className="small-paragraph">Job Titles: </p>

          <ul>
            {
              titlesList.map((myTtitle, key) => {
                return (
                  <li key={key}>
                    <div className="skill">
                      <input
                        readOnly
                        value={myTtitle}
                        name="title"
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

export default MultiJobSelector;