import React from 'react'
import SkillList from './SkillList'

class Dinosaur extends React.Component {
  state = {
    showSkills: false
  }

  toggleSkills = (event) => {
    const skills = !this.state.showSkills
    this.setState({ showSkills: skills })
  }

  render() {
    const showSkills = this.state.showSkills
    return (
      <li key={this.props.profile.name}>
        <div className="profile-card">
          <header className="profile-header" onClick={this.toggleSkills}>
            <img src={this.props.profile.image} alt={this.props.profile.name}/>
            <h2>{this.props.profile.name}</h2>

          </header>
          {showSkills && <SkillList skills={this.props.profile.skills} />}
        </div>

    </li>)
  }
}

export default Dinosaur
