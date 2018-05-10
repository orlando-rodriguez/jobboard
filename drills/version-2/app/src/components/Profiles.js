import React from 'react'
// import SkillList from './SkillList'
import Dinosaur from './Dinosaur';

class Profiles extends React.Component {
    render() {
        return (
            <main>
                <section id="profiles-container">
                    <h2>Profiles</h2>
                    <ul id="profiles">
                    {this.props.dinosaurs.map((dinosaur, index) => <Dinosaur key={index} profile={dinosaur} />)}
                    </ul>
                </section>
            </main>
        )
    }
}

export default Profiles
