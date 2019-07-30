const mainDiv = document.querySelector('#main-thoughts')


fetch ("http://localhost:3000/thoughts")
.then (resp => resp.json())
.then (renderThoughts)

function renderThoughts(data) {
  console.log(data)
  for (const thought of data) {
    // debugger 
    const div = document.createElement('div');
    div.className = 'thoughts';
    // div.dataset.id = thought.id;
    div.innerHTML = `
      <h3>${thought.user.name}</h3>
      <p>${thought.content}</p>
      <hr>
      `
      if (thought.replies.length > 0) { 
        let pTag = document.createElement("p")
        pTag.dataset.replyId = thought.id
        pTag.className = "replies-link"
        pTag.innerText = `${thought.replies.length} Replies`
        div.append(pTag)
      }
      
      mainDiv.append(div)

  }
}

mainDiv.addEventListener('click', (e) => {
  if (e.target.className === 'replies-link') {
    renderReplies(e.target)
  }
}) 

function renderReplies(target) {
  console.log(target.dataset.replyId)

  fetch(`http://localhost:3000/replies/${target.dataset.replyId}`)
  .then(response => response.json())
  .then(data => console.log(data.user.name)
  )

