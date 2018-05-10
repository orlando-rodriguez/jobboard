import React, { Component } from 'react';
import Preview from './Preview'

class InputForm extends Component {
  state = {
      applyHere: "",
      showResponse: false
    }

  resetForm = () => {
    this.setState(
      {
        applyHere: ""

      }
    )
  }

  handleChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.resetForm()
  }

  render () {
    const showResponse = this.state.showResponse
    return (
      <div>
      <form id="application-input" onSubmit={this.onFormSubmit}>
      <label>Apply Here: </label>
      <textarea name="applyHere" onChange={this.handleChange} id='application-text' rows="8" cols="100"></textarea>
      <input id="submit" type="submit" value="submit" onClick={this.onFormSubmit}/>
      </form>
      {showResponse && <p id="message">&nbsp;</p>}
      <Preview message={this.state.applyHere}/>
      </div>
    )
  }

}
export default InputForm
