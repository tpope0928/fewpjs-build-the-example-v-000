// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartStates = {
'♡':'♥',
'♥':'♡'
};

let colorState = {
"red" : "",
"" : "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
let heart = e.target;
mimicServerCall("objUrl")
    .then(function (serverMessage) {
      heart.innerText = heartStates[heart.innerText];
      heart.style.color = colorState[heart.style.color];
    })
    .catch(function (error) {
      document.getElementById("modal").className = "";
      document.getElementById("modal-message").innerText = "Something went wrong!"
      setTimeout(function () {
        document.getElementById("modal").className = "hidden";
      }, 5000)
    })
}

for (let glyph of articleHearts){
glyph.addEventListener("click", likeCallback);
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
return new Promise(function(resolve, reject) {
  setTimeout(function() {
    let isRandomFailure = Math.random() < .2
    if (isRandomFailure) {
      reject("Random server error. Try again.");
    } else {
      resolve("Pretend remote server notified of action!");
    }
  }, 300);
});
}
