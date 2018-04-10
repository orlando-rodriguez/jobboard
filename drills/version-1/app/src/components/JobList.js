import React from 'react';

class JobList extends React.Component {

  render() {
        return (
          <section>
            <h2>Job Listings</h2>
              <ul id="job-listings">
                {this.props.listings.map(listing => {
                  return (
                    <li key={listing.title}>
                      <h4>{listing.title}</h4>
                      <small>{listing.pay}</small>
                      <p>{listing.description}</p>
                      <small>{`${listing.interested.length} dinos are interested in this job`}</small>
                    </li>
                  )
                })}
              </ul>
          </section>)
  }
}

export default JobList
