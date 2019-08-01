const mainDiv = document.querySelector('#main-thoughts')
const navBar = document.querySelector('#nav-bar')

// Adds Event Listener For Posting A Thought
function createThought() {
  const create = document.querySelector('#create-thought') 
  create.addEventListener('click', (event) => {
    if (event.target.classList.contains('submit-button')) {
      let input = event.target.parentElement.querySelector("textarea").value 
      
      fetch("http://localhost:3000/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "user_id": 7,
          "content": input
        })
      }).then(response => response.json())
      .then(renderNewThought)
    }
  })
}


// adds a new thought to the page
function renderNewThought(thought) {
  console.log(thought)

  const thoughtDiv = document.createElement('div');
    thoughtDiv.className = 'thoughts';
    thoughtDiv.id = thought.id;
    thoughtDiv.innerHTML = `
      <div class="thought-header">
        <h3 class="user-info" id= ${thought.user_id}> <img src="${thought.image}">
        ${thought.user_name}</h3>
      </div>
      <p>${thought.content}</p>
      <hr>
      `
      let newDiv = document.createElement("div")
        newDiv.className = "container-div"
        let pTag = document.createElement("button")
        pTag.dataset.thoughtId = thought.id
        pTag.className = "replies-link"
        pTag.innerText = `0 Replies`
        newDiv.append(pTag)
        let replyButton = document.createElement("button")
        replyButton.dataset.thoughtId = thought.id 
        replyButton.className = "comments-link"
        replyButton.innerText = "Reply"
        newDiv.append(replyButton)
        thoughtDiv.append(newDiv)

        if (thought.user_id === 7) {
          let deleteButton = document.createElement("button")
          deleteButton.innerText = "Delete Thought"
          deleteButton.dataset.id = thought.id 
          deleteButton.className = "delete-thought-button"
          newDiv.append(deleteButton)
        }  

      // Append the different thoughts to our main body div

    mainDiv.prepend(thoughtDiv)
}


createThought()


fetch ("http://localhost:3000/thoughts")
.then (resp => resp.json())
.then (renderThoughts)

function renderThoughts(data) {
  console.log(data)
  for (const thought of data) {
    // Create Div for Thoughts
    const thoughtDiv = document.createElement('div');
    thoughtDiv.className = 'thoughts';
    thoughtDiv.id = thought.id;
    thoughtDiv.innerHTML = `
      <div class="thought-header">
        <h3 class="user-info" id= ${thought.user_id}> <img src="${thought.image}">
        ${thought.user_name}</h3>
      </div>
      <p>${thought.content}</p>
      <hr>
      `
      


      if (thought.replies.length > -1) { 
        // Creating the replies link with the number of replies
        let newDiv = document.createElement("div")
        newDiv.className = "container-div"
        let pTag = document.createElement("button")
        pTag.dataset.thoughtId = thought.id
        pTag.className = "replies-link"
        pTag.innerText = `${thought.replies.length} Replies`
        newDiv.append(pTag)
        let replyButton = document.createElement("button")
        replyButton.dataset.thoughtId = thought.id 
        replyButton.className = "comments-link"
        replyButton.innerText = "Reply"
        newDiv.append(replyButton)
        thoughtDiv.append(newDiv)

        if (thought.user_id === 7) {
          let deleteButton = document.createElement("button")
          deleteButton.innerText = "Delete Thought"
          deleteButton.dataset.id = thought.id 
          deleteButton.className = "delete-thought-button"
          newDiv.append(deleteButton)
        }  
        

        // Parent Div to hold all Replies 
        const parentReplyDiv = document.createElement('div')
        parentReplyDiv.className = 'parentReplyDiv'
        parentReplyDiv.id = `${thought.id}`

        thought.replies.forEach(function(reply) {

          const replyDiv = document.createElement('div')
                replyDiv.className = 'replyDiv'
                replyDiv.innerHTML = `
                  <p class="replied-image"> <img src="${reply.user_image}"
                   class="replied">${reply.user_name} Replied:</p>
                  <p class="replied-content">${reply.content}</p>
                `
                
                // Appending the different replies to one Div
                parentReplyDiv.append(replyDiv)
                // Appending the ParentReplyDiv to 
                thoughtDiv.append(parentReplyDiv)

        })

        const replyFormDiv = document.createElement('div')
        replyFormDiv.className = 'commentDiv'
        replyFormDiv.innerHTML = `
          <textarea>

          </textarea>
          <button type="submit"> Submit </button>
        `
        thoughtDiv.append(replyFormDiv)
        // const replyForm = document.createElement("text-area")

      }
      

      // Append the different thoughts to our main body div
      mainDiv.append(thoughtDiv)

  }
}

mainDiv.addEventListener('click', (e) => {
  // Click Event for reply button
  if (e.target.classList.contains('replies-link')) {
   
    if (e.target.nextElementSibling.parentElement.nextElementSibling.classList.contains('parentReplyDiv')) {
      e.target.nextElementSibling.parentElement.nextElementSibling.classList.remove('parentReplyDiv')
    } else {
      e.target.nextElementSibling.parentElement.nextElementSibling.classList.add('parentReplyDiv')
    };
  }

  // Click event for comment button
  if (e.target.classList.contains('comments-link')) {

      if (e.target.parentElement.nextElementSibling.classList.contains('commentDiv')) {
        e.target.parentElement.nextElementSibling.classList.remove('commentDiv')
      } else {
        e.target.parentElement.nextElementSibling.classList.add('commentDiv')
      };

    if (e.target.parentElement.nextElementSibling.nextElementSibling.classList.contains('commentDiv')) {
      e.target.parentElement.nextElementSibling.nextElementSibling.classList.remove('commentDiv')
    } else {
      e.target.parentElement.nextElementSibling.nextElementSibling.classList.add('commentDiv')
    };
  }

  if (e.target.classList.contains('user-info')) {
    fetch(`http://localhost:3000/users/${e.target.id}`)
    .then(response => response.json())
    .then(showUserInfo)
  }

  if (e.target.classList.contains("delete-thought-button")) {
    fetch(`http://localhost:3000/thoughts/${e.target.dataset.id}`, {
      method: "DELETE",
    })
    .then(e.target.parentNode.parentNode.remove())
  }


}) 

navBar.addEventListener('click', (event) => {
  const shareThought = document.querySelector('#create-thought')

  if (event.target.classList.contains('share-thought-link')) {
    if (shareThought.style.display === 'none') {
      shareThought.style.display = 'block';
    } else {
      shareThought.style.display = 'none';
    }
  }

  if (event.target.classList.contains('share-thought-text')) {
    if (shareThought.style.display === 'none') {
      shareThought.style.display = 'block';
    } else {
      shareThought.style.display = 'none';
    }
  }


})




// Show user profile function
function showUserInfo(data) {
  // const hello = document.querySelector('#create-thought');
  // debugger
  // const hello2 = document.querySelector('#main-thoughts');
  // hello.style.display = 'none';
  // hello2.style.display = 'none';

  const hello = document.querySelector('.modal')
  hello.style.display = 'block';
  window.onclick = function(event) {
    if (event.target == hello) {
        hello.style.display = "none";
    }
  }
  
  const encapInfo = document.querySelector(".show-user-info")
  let headerDiv = document.querySelector(".show-user-header")
  const thoughtsDiv = document.querySelector('.show-user-thoughts')
  const showReplies = document.querySelector('.show-user-replies');
  headerDiv.innerHTML =`
          <h3>${data.name}</h3>
          <img src=${data.image} alt=${data.name}>
          <p> Species: ${data.species} </p>
          <p> Diseases: ${data.diseases} </p>
          <p> Location: ${data.location} </p>
          `
  // data.thoughts.forEach(thought => {
  //   const thoughtsP = document.createElement('p')
  //   thoughtsP.innerText = `${thought.content}`
  //   thoughtsDiv.append(thoughtsP);
  // })

  // data.replies.forEach(reply => {
  //   const replyP = document.createElement('p')
  //   replyP.innerText = `${reply.content}`
  //   showReplies.append(replyP)
  // })

  encapInfo.append(div)
  

}


