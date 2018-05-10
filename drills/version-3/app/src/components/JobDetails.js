import React from 'react'

class JobDetails extends React.Component {
  render() {
    return (
      <section id="job-details">
        <h2>Job Details</h2>
        <h4>{this.props.jobs.title}</h4>
        <p>{this.props.jobs.description}</p>
      </section>
    )
  }
}

export default JobDetails
