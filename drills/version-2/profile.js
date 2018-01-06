
// let apiURL = 'http://localhost:3000';

(function initializePage(){
  Handlebars.registerPartial('skills', document.getElementById('skills-template').innerHTML)
  getDinosaurs().then(() => response.forEach(dinosaur => {
      addProfile(dinosaur);
      document.querySelectorAll(".profile-header").forEach(element => element.addEventListener("click", toggleDetails))
  }})
})()

function getDinosaurs() {
  let apiURL = 'http://fathomless-plains-51634.herokuapp.com'
  return fetch(`${apiURL}/dinosaurs`)
    .then(response => response.json())
}

function addProfile(data) {
  document.getElementById('profiles-container').innerHTML += compileTemplate('skills-template', data)
}

function compileTemplate(template) {
  var templateContent = document.getElementById(template).innerHTML
  var render = Handlebars.compile(templateContent)
  return renderProfile(data)
}

function toggleDetails(e) {
  e.preventDefault()
  let container = [].slice.call(e.target.parentNode.children)
  let list = container.filter(el => el.classList.contains('skills-container'))[0]
  list.classList.toggle('hidden')
}
