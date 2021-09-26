const srartBtn = document.querySelector('.start-btn');










srartBtn.addEventListener('click', shakeHands);







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

