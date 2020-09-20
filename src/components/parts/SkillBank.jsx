import React from 'react';

const SkillBank = ({ keySkills, myKeySkills, addToList }) => {
  return (
    <div>
      <select name="keySkills" onChange={addToList}>
        {
          keySkills.map((keySkill, key) => {
            return (
            <option key={key} value={keySkill}>{keySkill}</option>
            );
          })
        }
      </select>

      <div>
        My key skills:

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
  );
};

export default SkillBank;