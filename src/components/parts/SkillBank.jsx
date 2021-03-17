import React from 'react';
import Select from 'react-select';
import keySkills from '#assets/inputs/new/new-keySkills.js';

const SkillBank = ({ skillsList, addToList, removeFromList }) => {
  skillsList = skillsList || [];

  return (
    <div className="select">
      <label>Required Skills</label>


      <div className="skill-bank">
        <Select
          name="keySkills"
          onChange={addToList}
          options={keySkills}
        />

        <div className="skill-box">
          <p className="small-paragraph">Skills: </p>

          <ul>
            {
              skillsList.map((myKeySkill, key) => {
                return (
                  <li key={key}>
                    <div className="skill">
                      <input
                        readOnly
                        value={myKeySkill}
                        name="keySkills"
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

export default SkillBank;