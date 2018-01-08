(function initializePage(){
  getDinosaurs().then(response => {
    response.map(buildProfileItem).forEach(addProfileItem);
    document.querySelectorAll('.profile-card')
      .forEach(element => element.addEventListener('click', toggleDetails));
  });
})();

function getDinosaurs() {
  let apiURL = './dinosaurs.json';
  return fetch(apiURL).then(response => response.json());
}

function addProfileItem(profileItem) {
  document.querySelector('#profiles').appendChild(profileItem);
}

function buildProfileItem(profile){
  const template = document.querySelector('#profile-template').innerHTML;
  const $li = document.createElement('li');
  $li.innerHTML = Handlebars.compile(template)(profile);
  return $li;
}

function toggleDetails(event) {
  event.preventDefault();
  if(event.target.parentNode.classList.contains('profile-header')) {
    this.querySelector('.skills-container').classList.toggle('hidden');
  }
}
