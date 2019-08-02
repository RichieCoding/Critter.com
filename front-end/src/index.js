const mainDiv = document.querySelector('#main-thoughts')
const navBar = document.querySelector('#nav-bar')
const searchBar = document.querySelector('#search')

// Adds Event Listener For Posting A Thought
function createThought() {
  const create = document.querySelector('#create-thought') 
  create.addEventListener('click', (event) => {
    if (event.target.classList.contains('submit-button')) {
      let input = event.target.parentElement.querySelector("textarea").value 
      event.target.parentElement.querySelector("textarea").value = ""
      
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





// Search User

searchBar.addEventListener('keyup', searchUser);

function searchUser(e) {
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.thoughts').forEach(function(user){
    // debugger
    const userName = user.querySelector('.user-info').innerText
    
    if(userName.toLowerCase().indexOf(text) != -1) {
      user.style.display = 'block'
    } else {
      user.style.display = 'none'
    }
  });
}




// Randomly Creates Thoughts ------ Leave Commented Out till you want it to create
// (function loop(fetchTest) {

//   const userIdArray = [1,2,3,4,5,6,8,9,10]
//   const quoteRandomArray = ["I just found a wallet, time to buy some bananas","Lick...lick....lick","Sometimes I wish I was an octopus, so I could slap eight people at once.","You can trust your dog to guard your house but never trust your dog to guard your sandwich","If aliens saw humans walking us and picking up our poop, who would they think is in charge?","People say nothing is impossible....but I do nothing everyday","Light travels faster than sound. This is why some people appear bright until you hear them speak.","The difference between stupidity and genius is that genius has its limits","All the things I really like to do are either immoral, illegal or fattening","The average dog is a nicer person than the average person","I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.","My opinions may have changed, but not the fact that I’m right","Trouble knocked at the door, but, hearing laughter, hurried away","Wine is constant proof that God loves us and loves to see us happy","Money won’t buy happiness, but it will pay the salaries of a large research staff to study the problem.","I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives", "I changed all my passwords to incorrect so my computer just tells me when I forget.", "Whatever you do in life give 100%.......unless you're giving blood","I was planning on doing something today, but I haven't finished doing nothing from yesterday","I wish real life was a cartoon, so that I can wear the same outfit and nobody would care...wait I only have one outfit?"]
    
//   let array = userIdArray[Math.floor(Math.random()*userIdArray.length)]
//   let quoteArray = quoteRandomArray[Math.floor(Math.random()*quoteRandomArray.length)]
//   var rand = Math.round(Math.random() * (12000 - 500)) + 500;
//   setTimeout(function() {
//       myCallback(array, quoteArray);
//     loop();  
//   }, rand);
// }());





function myCallback(array, quoteArray) {
  
  fetch("http://localhost:3000/thoughts", {
    method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "user_id": array,
          "content": quoteArray
        })
      }).then(response => response.json())
      .then(renderNewThought)
  console.log('hello')
}



// adds a new thought to the page
function renderNewThought(thought) {
  console.log(thought)
  const shareThought = document.querySelector('#create-thought')
  shareThought.style.display = 'none';
  
  const thoughtDiv = document.createElement('div');
  thoughtDiv.className = 'thoughts';
    // thoughtDiv.id = thought.id;
    thoughtDiv.innerHTML = `
    <div class="thought-header">
    <img src="${thought.image}">
    <h3 class="user-info" id=${thought.user_id}>${thought.user_name}</h3>
      </div>
      <p>${thought.content}</p>
      <hr>
      `
      let newDiv = document.createElement("div")
      newDiv.className = "container-div"
      let pTag = document.createElement("button")
      // pTag.dataset.thoughtId = thought.id
      pTag.className = "replies-link"
      pTag.innerText = `0 Replies`
        newDiv.append(pTag)
        
        // let replyButton = document.createElement("button")
        // replyButton.dataset.thoughtId = thought.id 
        // replyButton.className = "comments-link"
        // replyButton.innerText = "Reply"
        // newDiv.append(replyButton)
        thoughtDiv.append(newDiv)

        if (thought.user_id === 7) {
          let deleteButton = document.createElement("button")
          deleteButton.innerText = "Delete Thought"
          deleteButton.dataset.id = thought.id 
          deleteButton.className = "delete-thought-button"
          newDiv.append(deleteButton)
        }  
       
        thoughtDiv.append(newDiv)
        
        const parentReplyDiv = document.createElement('div')
        parentReplyDiv.className = 'parentReplyDiv'
        parentReplyDiv.id = `${thought.id}`
        
        
        const replyDiv = document.createElement('div')
        replyDiv.className = 'replyDiv'
         
                // Appending the different replies to one Div
                parentReplyDiv.append(replyDiv)
                // Appending the ParentReplyDiv to 
                thoughtDiv.append(parentReplyDiv)

                
                
        const replyFormDiv = document.createElement('div')
        replyFormDiv.className = 'comment-div'
        replyFormDiv.innerHTML = `
        <textarea class= "commentText"></textarea>
        <button class="commentBtn" type="button"> Add A Reply </button>
        `
        thoughtDiv.append(replyFormDiv)
        
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
        pTag.innerHTML = `<span class="num"> ${thought.replies.length} </span> Replies `
        newDiv.append(pTag)
        // let replyButton = document.createElement("button")
        // replyButton.dataset.thoughtId = thought.id 
        // replyButton.className = "comments-link"
        // replyButton.innerText = "Reply"
        // newDiv.append(replyButton)
        

        //like button 

        let likeButton = document.createElement("button")
        likeButton.innerHTML = "<span class='likes'> 0 </span> Likes"
        newDiv.append(likeButton)
        
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
          
          if (reply.user_id === 7) {
            let deleteReply = document.createElement("button")
            deleteReply.className = "delete-reply-button"
            deleteReply.dataset.id = reply.id 
            deleteReply.innerText = "Delete Reply"
            replyDiv.append(deleteReply)
            
          }
          // Appending the different replies to one Div
          parentReplyDiv.append(replyDiv)
          // Appending the ParentReplyDiv to 
          thoughtDiv.append(parentReplyDiv)

        })
        
        const replyFormDiv = document.createElement('div')
        replyFormDiv.className = 'comment-div'
        replyFormDiv.innerHTML = `
        <textarea class= "commentText"></textarea>
        <button class="commentBtn" type="button"> Add A Reply </button>
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
        
        if (e.target.parentElement.nextElementSibling.classList.contains("parentReplyDiv")) {
      e.target.parentElement.nextElementSibling.classList.remove("parentReplyDiv") 
    }
    else {
      e.target.parentElement.parentElement.children[4].classList.add("parentReplyDiv")
    }
    
  }

  // adds event for delete reply button
  if (e.target.className === "delete-reply-button") {
    
    e.target.parentElement.parentElement.parentElement.querySelector("span").innerText = parseInt(e.target.parentElement.parentElement.parentElement.querySelector("span").innerText) - 1
    let id = e.target.dataset.id 
    fetch(`http://localhost:3000/replies/${id}`, {
      method: "DELETE"
    })
    .then(e.target.parentElement.remove())
    
  }

  // Click event for comment button
  if (e.target.className === "commentBtn") {
    let input = e.target.parentElement.querySelector("textarea").value 
    e.target.parentElement.querySelector("textarea").value = ""

    fetch("http://localhost:3000/replies", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "user_id": 7,
        "thought_id": e.target.parentElement.parentElement.id,
        "content": input 
      })
    }).then(response => response.json())
    .then(renderSingleReply)
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
  
  if (e.target.firstElementChild.className === "likes") {
     console.log("likes")
     e.target.firstElementChild.innerText = parseInt(e.target.firstElementChild.innerText) + 1
    
  }
  
}) 





function renderSingleReply(reply) {
  console.log(reply)
  const parentDiv = document.getElementById(`${reply.thought_id}`)
  // debugger
  const headerDiv = document.querySelector('.container-div')
  const whereIWantToAppendTo = parentDiv.lastChild.previousElementSibling
  // const whereIWantToAppendTo = headerDiv.nextElementSibling
  const commentDiv = document.createElement('div')
  const hello22 = document.createElement('p')
  commentDiv.className = 'reply-comment-added'
  // debugger
  commentDiv.innerHTML = `
    <img src="${reply.user_image} style="height: 100px; width: 100px;">
    <p>${reply.user_name} Replied:</p>
    <p>${reply.content}</p>
  `
  let deleteReply = document.createElement("button")
  deleteReply.className = "delete-reply-button"
  deleteReply.dataset.id = reply.id 
  deleteReply.innerText = "Delete Reply"
  commentDiv.append(deleteReply)

  // Adds Number of replies
  let thoughtDiv = document.getElementById(`${reply.thought_id}`)
  thoughtDiv.querySelector("span").innerText = parseInt(thoughtDiv.querySelector("span").innerText) + 1

  whereIWantToAppendTo.append(commentDiv) 
  

} 


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





