document.getElementById('click').addEventListener('click', movie)
let age = 0

function movie () {
  age = document.getElementById('movie').value
  if (age >= 17) {
    document.getElementById('name').innerHTML = 'you are allowed to watch Deadpool , Logan and Haloween'
  } else if (age >= 13) {
    document.getElementById('name').innerHTML = 'you are allowed to watch  Harry Potter and the Sorcerer stone , freaky friday and the parent trap'
  } else if (age >= 5) {
    document.getElementById('name').innerHTML = 'you are allowed to watch Homealone, the little mermaid and toy story'
  } else {
    document.getElementById('name').innerHTML = 'you are not allowed to watch any movies'
  }
}
