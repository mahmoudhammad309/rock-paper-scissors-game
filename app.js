const startBtn = document.querySelector('.start-btn');
const computerIMG = document.getElementById('computer-img');
const playerIMG = document.getElementById('player-img');
const playerOptions = document.querySelectorAll('.options-btn');
const computerState = document.querySelector('.description h1');
const playerState  = document.querySelector('.player-section h1');
const winner = document.querySelector('.winner p');
const computerScore = document.querySelector('.computer-score h2 span');
const playerScore = document.querySelector('.player-score h2 span');
const computerOptions = ['rock', 'paper', 'scissors'];


startBtn.addEventListener('click', runGame);



function runGame() {
  // reset images
  computerIMG.src = `images/rock_1.png`;
  playerIMG.src = `images/rock_2.png`;

  shakeHands();

  // computer selection
  const computerSelection = (() => {
   return computerOptions[Math.floor(Math.random() * 3)];
  })();

  setTimeout(() => {
    computer = computerSelection;
    computerState.textContent = computerSelection;
    computerIMG.src = `images/${computerSelection}_1.png`;
  }, 2000);


  // winner check
  setTimeout(winnerCheck, 2000)
};






// player selection

playerOptions.forEach((clickedBtn) => {
  clickedBtn.addEventListener('click',()=> {
    setTimeout(() => {
      player = clickedBtn.textContent;
      playerState.textContent = clickedBtn.textContent;
      playerIMG.src =  `images/${clickedBtn.textContent}_2.png`;
    }, 2000)
  });
});


// winner check

function winnerCheck() {

  const computerChoice = computerState.textContent;
  const playerChoice = playerState.textContent;
  let whoIsWinner = winner;

  switch (true) {
    // checking for tie 
    case (computerChoice === playerChoice):
      whoIsWinner.textContent = 'we tied';
      break;
    // checking for Rock
    case (playerChoice === 'rock' && computerChoice === 'scissors'):
      whoIsWinner.textContent = 'player wins';
      playerScore.textContent = parseInt(playerScore.textContent) + 1;
      break;
    case (playerChoice === 'rock' && computerChoice !== 'scissors'):
        whoIsWinner.textContent = 'computer wins';
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
      break;
    
     // checking for Paper
     case (playerChoice === 'paper' && computerChoice === 'scissors'):
      whoIsWinner.textContent = 'computer wins';
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      break;
    case (playerChoice === 'paper' && computerChoice !== 'scissors'):
        whoIsWinner.textContent = 'player wins';
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
      break;

      // checking for scissors
     case (playerChoice === 'scissors' && computerChoice === 'rock'):
      whoIsWinner.textContent = 'computer wins';
      computerScore.textContent = parseInt(computerScore.textContent) + 1;
      break;
    case (playerChoice === 'scissors' && computerChoice !== 'rock'):
        whoIsWinner.textContent = 'player wins';
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
      break;
  }
  
}; 

// add animation
function shakeHands() {
 const images = document.querySelectorAll('.img');
 images.forEach(e => {
  e.classList.add('animate');
 });

 setTimeout(() => {
  images.forEach(e => {
    e.classList.remove('animate');
   });
 }, 2000);
  
};

