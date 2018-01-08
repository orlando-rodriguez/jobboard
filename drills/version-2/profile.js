(function initializePage(){
  getDinosaurs().then(response => {
    response.forEach(addProfile);
    document.querySelectorAll('.profile-card').forEach(element => element.addEventListener("click", toggleDetails));
  });
})();

function getDinosaurs() {
  let apiURL = './dinosaurs.json';
  return fetch(apiURL).then(response => response.json());
}

function addProfile(data) {
  var templateContent = document.querySelector('#profile-template').innerHTML;
  var render = Handlebars.compile(templateContent);
  document.querySelector('#profiles-container').innerHTML += render(data);
}

function toggleDetails(event) {
  event.preventDefault();
  if(event.target.parentNode.classList.contains('profile-header')) {
    this.querySelector('.skills-container').classList.toggle('hidden');
  }
}
