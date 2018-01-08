(function initializePage(){
  getDinosaurs().then(response => {
    response.forEach(dinosaur => {
      addProfile(dinosaur);
    })
    document.querySelectorAll(".profile-card").forEach(element => element.addEventListener("click", toggleDetails));
  });
})();

function getDinosaurs() {
  let apiURL = './dinosaurs.json';
  return fetch(`${apiURL}`).then(response => response.json());
}

function addProfile(data) {
  var templateContent = document.getElementById('profile-template').innerHTML;
  var render = Handlebars.compile(templateContent);
  document.getElementById('profiles-container').innerHTML += render(data);
}

function toggleDetails(e) {
  e.preventDefault();
  let container = [].slice.call(e.target.parentNode.parentNode.children);
  let list = container.filter(el => el.classList.contains('skills-container'))[0];
  list.classList.toggle('hidden');
}
