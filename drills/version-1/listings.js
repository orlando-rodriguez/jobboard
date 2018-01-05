(function initializePage(){
  getListings()
  document.querySelector(".job-form").addEventListener("submit", submitForm)
})()

function getListings() {
  let apiURL = 'https://fathomless-plains-51634.herokuapp.com'
  fetch(`${apiURL}/jobs`)
    .then(response => response.json())
    .then(response => {
      response.forEach(listing => {
        addListing(listing)
      })
    })
}

function submitForm(event) {
  event.preventDefault();
  const data = new FormData(event.target)
  const newListingData = {
    title: data.get('title'),
    pay: data.get('pay'),
    description: data.get('description')
  }
  addListing(newListingData)
}

function addListing(data) {
  let container = document.querySelector('#job-listings');
  let listing = document.createElement('li');
  buildListing(listing, data);
  container.append(listing);
}

function makeElement(tag, text) {
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function buildListing(listing, data) {
  listing.append(makeElement('h4', data.title));
  listing.append(makeElement('small', `${data.pay}`));
  listing.append(makeElement('p', data.description));
  listing.append(makeElement('small'), `${data.interested.length} dinos are interested in this job`)
}
