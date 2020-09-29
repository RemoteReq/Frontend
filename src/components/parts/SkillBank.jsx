import React from 'react';
import { keySkills } from '#assets/inputs/inputs';

const SkillBank = ({ myKeySkills, addToList }) => {
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
                  <li key={key}>{myKeySkill}</li>
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