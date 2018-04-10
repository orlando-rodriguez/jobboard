(function initializePage(){
  getListings().then(listings => listings.forEach(addListing));
  document.querySelector(".job-form").addEventListener("submit", submitForm);
})();

function getListings(){
  let apiURL = "./listings.json";
  return fetch(apiURL).then(response => response.json());
}

function submitForm(event){
  event.preventDefault();
  const data = new FormData(event.target);
  addListing({
    title: data.get("title"),
    pay: data.get("pay"),
    description: data.get("description"),
    interested: []
  });
  event.target.reset();
}

function addListing(data){
  let container = document.querySelector("#job-listings");
  let listing = document.createElement("li");
  buildListing(listing, [{
    selector: "h4",
    data: data.title
  },{
    selector: "small",
    data: `${data.pay}`
  },{
    selector: "p",
    data: data.description
  },{
    selector: "small",
    data: `${data.interested.length} dinos are interested in this job`
  }]);
  container.prepend(listing);
}

function makeElement(tag, text){
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function buildListing(listing, data){
  data.forEach(item => {
    listing.append(makeElement(item.selector, item.data));
  });
}
