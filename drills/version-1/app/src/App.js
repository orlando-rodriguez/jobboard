import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import JobList from './components/JobList'
import Form from './components/Form'
import Footer from './components/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    fetch('./listings.json')
    .then(response => response.json())
    .then(response => {
      this.setState({listings: response})
    })
  }

  jobListingSubmitted = (job) => {
    this.setState({
      listings: this.state.listings.concat(job).reverse()
    })
  }

  render() {
    return (
    <div>
    <Header />
    <main>
    <JobList listings={this.state.listings} />
    <Form jobListingSubmitted={this.jobListingSubmitted} />
    </main>
    <Footer />
    </div>
    );
  }
}

export default App;
