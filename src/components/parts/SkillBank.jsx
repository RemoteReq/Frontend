import React from 'react';
import { keySkills } from '#assets/inputs/inputs';

const SkillBank = ({ myKeySkills, addToList, removeFromList }) => {
  return (
    <div className="select">
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

                      <p
                        className="small-paragraph remove-icon"
                      >
                        X
                      </p>
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