// Simple Color Change App
//David Ewing, 14/05/2024

// Simple Color Change App
//David Ewing, 14/05/2024

let root = document.getElementById('root');
let starContainer = document.getElementById('star');
var audio = new Audio();
audio.src = 'twinkle.mp3';
audio.preload = 'auto';
audio.volume = 0.5;
audio.playbackRate = 1;

let height = window.innerHeight;
let width = window.innerWidth;

console.log(root);

const arr = ['A','B','C','D','E','F', 0,1,2,3,4,5,6,7,8,9];

root.addEventListener('touchstart', colorChange, false);
root.addEventListener('touchstart', starAnimation, false);

// Change Color of screen on tap. 
function colorChange(){
  let color = '#';
  for(let i = 0; i < 6; i++){
    const rand = Math.floor(Math.random() * arr.length);
    color += arr[rand]; // 
  }
  console.log(color)
  root.style.backgroundColor = `${color}`;
}

colorChange();


function starForge(){

  for(let j = 0; j <= 100; j++){

    let star = document.createElement('div');
    star.style.opacity = 0;
    star.innerHTML = '⭐';
    star.classList.add('star');
    star.style.position = 'absolute';
    star.style.transition = 'ease 1.1s';
    star.style.scale = '2.2';
    star.style.top = height / 2 + 'px';
    star.style.left = width / 2 + 'px';
    document.body.appendChild(star);
  }

}

starForge()

function starAnimation(){
  let stars = document.querySelectorAll('.star');
  let ele;
  let randX;
  let randY;

  audio.play();

  stars.forEach(element => {
    element.style.opacity = 1;
    randX = Math.floor(Math.random() * width);
    randY = Math.floor(Math.random() * height);
    element.style.left = randX + 'px';
    element.style.top = randY + 'px';
     element.style.scale = 0;
     element.style.rotate = 150 + 'deg'; 

  })


    setTimeout(removeStar, 1000);

}

// starAnimation();

function removeStar(){
  let stars = document.querySelectorAll('.star');
  for(let i = 0; i < stars.length - 1; i++){
    let ele = stars[i];
    ele.style.transition = 'ease-out 3s'
    ele.style.opacity = 0;
    ele.remove();
  }

  starForge();
}








