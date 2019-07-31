const mainDiv = document.querySelector('#main-thoughts')


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
      <h3>${thought.user.name}</h3>
      <p>${thought.content}</p>
      <hr>
      `
      if (thought.replies.length > 0) { 
        // Creating the replies link with the number of replies
        let pTag = document.createElement("p")
        pTag.dataset.thoughtId = thought.id
        pTag.className = "replies-link"
        pTag.innerText = `${thought.replies.length} Replies`
        thoughtDiv.append(pTag)

        // Parent Div to hold all Replies 
        const parentReplyDiv = document.createElement('div')
        parentReplyDiv.className = 'parentReplyDiv'
        parentReplyDiv.id = `${thought.id}`

        // Fetching the replies routes 
        fetch(`http://localhost:3000/replies`)
        .then(response => response.json())
        .then(function(data){
          data.forEach(function(reply){
            // Creating different divs for each replies
            const replyDiv = document.createElement('div')
            replyDiv.className = 'replyDiv'
            replyDiv.innerHTML = `
              <p>${reply.user.name} Replied:</p>
              <p>${reply.content}</p>
            `
            // Appending the different replies to one Div
            parentReplyDiv.append(replyDiv)
            // Appending the ParentReplyDiv to 
            thoughtDiv.append(parentReplyDiv)
          })
        })
      }

      // Append the different thoughts to our main body div
      mainDiv.append(thoughtDiv)

  }
}

mainDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('replies-link')) {
    const replyLink = document.getElementById(`${e.target.id}`)
    // const hiddenDiv = document.querySelector('.reply')
    if (e.target.nextElementSibling.classList.contains('parentReplyDiv')) {
      e.target.nextElementSibling.classList.remove('parentReplyDiv')
    } else {
      e.target.nextElementSibling.classList.add('parentReplyDiv')
    }
  }
}) 





// function renderReplies(target) {
//   // console.log(target.dataset.replyId)

//   fetch(`http://localhost:3000/replies`)
//   .then(response => response.json())
//   .then(function(data){
//     data.forEach(function(reply) {
//       if (reply.thought_id == target.dataset.thoughtId ) {
//         const parentDiv = document.getElementById(`${target.dataset.thoughtId}`)
//         const replyDiv = document.createElement('div');
//         replyDiv.className = 'replyDiv';
//         replyDiv.innerHTML = `
//         <div class="single-reply">
//         <p> ${reply.user.name} replied: </p>
//           <p>${reply.content}</p>
//           </div>
//         `
//         parentDiv.append(replyDiv)
//         console.log("hi")
//         debugger
//       }

//     })

    // for (let i = 0; i < data.length; i++) {
    //   console.log(data[i].content)
    // }

    // // for (const reply in data) {
    // //   console.log(reply)
    // //   // replyDiv.innerHTML = `
    // //   //   <p>${reply.content}</p
    // //   // `
    // // }
//     // parentDiv.append(replyDiv)
//   })
// }
