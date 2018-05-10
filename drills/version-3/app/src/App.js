import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import JobDetails from './components/JobDetails'
import InputForm from './components/InputForm'
import Footer from './components/Footer'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: {}
    }
  }

  componentDidMount(){
    return fetch('./listing.json')
    .then(response => response.json())
    .then(listings => {
      this.setState({jobs: listings})
    })

  }

  render() {
    return (
      <div className="App">
      <Header />
      <main>
      <JobDetails jobs={this.state.jobs} />
      <InputForm />
      </main>
      <Footer />
      </div>
    );
  }
}

export default App;
