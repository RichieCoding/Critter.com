

fetch ("http://localhost:3000/thoughts")
.then (resp => resp.json())
.then (renderThoughts)

function renderThoughts(data) {
  console.log(data)
  for (const thought of data) {
    debugger 
    const mainDiv = document.querySelector('#main-thoughts')
    const div = document.createElement('div');
    div.className = 'thoughts';
    div.dataset.id = thought.id;
    div.innerHTML = `
      <h3>${thought.user.name}</h3>
      <p>${thought.content}</p>
    `
    mainDiv.append(div)
  }
}