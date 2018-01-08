(function initializePage(){
  document.querySelector('#application-text').addEventListener('keyup', updatePreview);
  document.querySelector('#preview-toggle').addEventListener('click', togglePreview);
  document.querySelector('#application-input').addEventListener('submit', submitApplication);
  getListing().then(response => {
    addListing(response);
  });
})();

function getListing() {
  let apiURL = './listing.json';
  return fetch(apiURL).then(response => response.json());
}

function addListing(data) {
  const container = document.querySelector('#job-details');
  container.append(makeElement('h4', data.title));
  container.append(makeElement('p', data.description));
}

function makeElement(tag, text){
  let element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function updatePreview() {
  const preview = document.querySelector('#application-preview');
  const text = document.querySelector('#application-text').value;
  preview.textContent = text;
}

function togglePreview() {
  const preview = document.querySelector('#application-preview');
  preview.classList.toggle('hidden');
}

function submitApplication(event){
  event.preventDefault();
  event.target.reset();
  document.querySelector("#application-preview").textContent = "";
  flashSuccessMessage("Your application was submitted!");
}

function flashSuccessMessage(message){
  document.querySelector("#message").textContent = message;
}
