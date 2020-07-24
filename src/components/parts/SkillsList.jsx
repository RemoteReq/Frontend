import React, { Component } from 'react';

const SkillsList = ({ keySkills, updateKeySkills }) => {
  return (
    keySkills
      ? <div className="mini-list">
      {
        keySkills.map((skill, index) => {
          return (
            <Skill
            key={index}
            index={index}
            skill={skill}
            updateKeySkills={updateKeySkills} />
          );
        })
      }

      <SkillAdder updateKeySkills={updateKeySkills}/>
    </div>
      : <div>
      <SkillAdder updateKeySkills={updateKeySkills}/>
    </div>
  );
};

const Skill = ({ skill, index }) => {
  return (
    <div>

      <input
        defaultValue={skill}
        index={index}
        readOnly
      />

    </div>
  );
};

class SkillAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      skill: e.target.value,
    });
  }

  render() {
    const { skill } = this.state;

    return (
      <div className="skill-adder">
    <input
      onChange={(e) => { return this.handleChange(e); }}
    />
    <button
    onClick={(e) => {
      this.props.updateKeySkills(e, skill);
    }}
    >+</button>
    </div>
    );
  }
}

export default SkillsList;