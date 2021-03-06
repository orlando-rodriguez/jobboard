import React from 'react'


class Form extends React.Component {

  state = {
      "id": "",
      "title": "",
      "description": "",
      "pay": "",
      "interested": ""
    }

  resetForm = () => {
    this.setState(
      {
        "id": "",
        "title": "",
        "description": "",
        "pay": "",
        "interested": ""
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
    this.props.jobListingSubmitted(this.state)
    this.resetForm()
  }

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.title} name="title" onChange={this.handleChange}
            />
          <label htmlFor="pay">Pay</label>
          <input type="text" value={this.state.pay} name="pay" onChange={this.handleChange}
            />
          <label htmlFor="description">Description</label>
          <textarea name="description" value={this.state.description} onChange={this.handleChange}
            rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    );
  }
}


export default Form;
