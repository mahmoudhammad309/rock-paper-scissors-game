const srartBtn = document.querySelector('.start-btn');
const computerIMG = document.getElementById('computer-img');
const playerIMG = document.getElementById('player-img');
 





const computerOptions = ['rock_1', 'paper_1', 'scissors_1'];


srartBtn.addEventListener('click', general);



function general() {
  computerIMG.src = `images/rock_1.png`;
  shakeHands();
  const computerChoose = (() => {
   return computerOptions[Math.floor(Math.random() * 3)];
  })();

  setTimeout(() => {
    computerIMG.src = `images/${computerChoose}.png`;
    console.log(computerIMG.src = `images/${computerChoose}.png`)
  }, 1100);
};

function computerChoose () {
  const randomNum = Math.floor(Math.random() * 3);
  return randomNum;
};






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

