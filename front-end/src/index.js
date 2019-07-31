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
      <div class="thought-header">
        <img src="${thought.image}">
        <h3>${thought.user_name}</h3>
      </div>
      <p>${thought.content}</p>
      <hr>
      `
      
      if (thought.replies.length > -1) { 
        // Creating the replies link with the number of replies
        let newDiv = document.createElement("div")
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
        

        // Parent Div to hold all Replies 
        const parentReplyDiv = document.createElement('div')
        parentReplyDiv.className = 'parentReplyDiv'
        parentReplyDiv.id = `${thought.id}`

        thought.replies.forEach(function(reply) {

          const replyDiv = document.createElement('div')
                replyDiv.className = 'replyDiv'
                replyDiv.innerHTML = `
                  <p>${reply.user_name} Replied:</p>
                  <p>${reply.content}</p>
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
  if (e.target.classList.contains('replies-link')) {
   
    if (e.target.nextElementSibling.parentElement.nextElementSibling.classList.contains('parentReplyDiv')) {
      e.target.nextElementSibling.parentElement.nextElementSibling.classList.remove('parentReplyDiv')
    } else {
      e.target.nextElementSibling.parentElement.nextElementSibling.classList.add('parentReplyDiv')
    }; 

    // if (e.target.parentElement.nextElementSibling.classList.contains('parentReplyDiv')) {
    //   e.target.parentElement.nextElementSibling.classList.remove('parentReplyDiv')
    // } else {
    //   e.target.parentElement.nextElementSibling.classList.add('parentReplyDiv')
    // };

  }
  
  if (e.target.classList.contains('comments-link')) {
    console.log('hello')
    // debugger
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
