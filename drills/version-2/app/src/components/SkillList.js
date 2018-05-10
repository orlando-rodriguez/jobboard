import React from 'react';


class SkillList extends React.Component {
  render(){
    return(
      <section className="skills-container">
      <h4>Skills</h4>
      <ul className="skills-list">
      {this.props.skills.map(skill => {
        return <li key={skill}>{skill}</li>
      })}
      </ul>
      </section>
    )
  }
}

export default SkillList
