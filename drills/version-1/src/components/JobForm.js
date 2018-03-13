import React from 'react';

export default class JobForm extends React.Component {
  state = {
    statusMessage: '',
    job: {title: '', pay: '', description: '', interested: []}
  }

  handleChange = (event) => {
    const job = this.state.job;
    job[event.target.name] = event.target.value
    console.log('handleChange field=%s value=%s', event.target.name, event.target.value);
    this.setState({job: job, statusMessage: null});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.props.createJob) throw new Error('JobForm requires a props.createJob function!')
    if (this.state.job.title.length === 0) {
      this.setState({statusMessage: 'ERROR: Title required!'});
      return;
    }
    if (this.state.job.pay.length === 0) {
      this.setState({statusMessage: 'ERROR: Pay required!'});
      return;
    }
    this.props.createJob(this.state.job)
    this.setState({statusMessage: 'Created Jerb!!!'})
  }

  render() {
    return <form className="job-form" onSubmit={this.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" value={this.state.job.title} onChange={this.handleChange} />
      <label htmlFor="pay">Compensation</label>
      <input type="text" name="pay" value={this.state.job.pay} onChange={this.handleChange} />
      <label htmlFor="description">Description</label>
      <textarea name="description" rows="8" cols="40" value={this.state.job.description} onChange={this.handleChange}></textarea>
      <input type="submit" name="submit" value="Submit" />
      <div className="status-bar">{this.state.statusMessage}</div>
    </form>
  }
}