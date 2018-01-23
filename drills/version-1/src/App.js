import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

class App extends Component {
  state = {jobs: []}

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    return fetch('./listings.json')
      .then(response => response.json())
      .then(jobs => this.setState({jobs}))
  }

  createJob = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const {jobs} = this.state;
    jobs.unshift({
      title: data.get('title'),
      pay: data.get('pay'),
      description: data.get('description'),
      interested: []
    });
    this.setState({jobs});
    event.target.reset();
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <h2>Job Listings</h2>
          <ul id='job-listings'>
            <JobList jobs={this.state.jobs} />
          </ul>
        </section>
        <aside id='side-bar'>
          <h3>Add a Job</h3>
          <JobForm createJob={this.createJob} />
        </aside>
        <Footer />
      </main>
    );
  }
}

export default App;
