// let apiURL = 'http://fathomless-plains-51634.herokuapp.com'
let apiURL = 'http://localhost:3000';

(function initializePage(){
  Handlebars.registerPartial('skills', document.getElementById('skills-template').innerHTML)
  getDinosaurs()
})()

function getDinosaurs() {
  fetch(`${apiURL}/dinosaurs`)
    .then(response => response.json())
    .then(response => {
      response.forEach(dinosaur => {
        addProfile(dinosaur);
        document.querySelectorAll(".profile-header").forEach(element => element.addEventListener("click", toggleDetails))
      })
    })
}

function addProfile(data) {
  var template = document.getElementById('profile-template').innerHTML
  var renderProfile = Handlebars.compile(template)
  document.getElementById('profiles-container').innerHTML += renderProfile(data)
}

function addSkills(name, data) {
  var template = document.getElementById('skills-template').innerHTML
  var renderSkills = Handlebars.compile(template)
  return renderSkills(data)
}

function toggleDetails(e) {
  e.preventDefault()
  let container = [].slice.call(e.target.parentNode.children)
  let list = container.filter(el => el.classList.contains('skills-container'))[0]
  list.classList.toggle('hidden')
}
