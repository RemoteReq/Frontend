import React from 'react';
import Select from 'react-select';
import { keySkills } from '#assets/inputs/inputs';

const SkillBank = ({ myKeySkills, addToList, removeFromList }) => {
  myKeySkills = myKeySkills || [];

  return (
    <div className="select">
      <label>Required Skills</label>

      <div className="skill-bank">
        <select name="keySkills" onChange={addToList}>
          <option>-----</option>
          {
            keySkills.map((keySkill, key) => {
              return (
                <option key={key} value={keySkill}>{keySkill}</option>
              );
            })
            }
        </select>

        <div className="skill-box">
          <p className="small-paragraph">Skills: </p>

          <ul>
            {
              myKeySkills.map((myKeySkill, key) => {
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