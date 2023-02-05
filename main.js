const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Get the error modal element
const errorModal = document.querySelector('.error-modal');

// Add the .hidden class to the error modal
errorModal.classList.add('hidden');

// Add an event listener to the heart element
const heart = document.querySelector('.heart');
heart.textContent = EMPTY_HEART;
heart.addEventListener('click', () => {
  if (heart.textContent === EMPTY_HEART) {
    mimicServerCall().then(() => {
      heart.textContent = FULL_HEART;
      heart.classList.add('activated-heart');
    }).catch(error => {
      errorModal.textContent = error;
      errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
  } else {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
